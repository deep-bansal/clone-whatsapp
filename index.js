const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const Messages = require("./models/dbMessages");
const Rooms = require("./models/rooms");
const Pusher = require("pusher");
const PORT = process.env.PORT || 9000;
const app = express();
const path = require("path");
const cors = require("cors");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origins", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use(cors());
app.use(express.json());
const connect_url = config.mongoURI;

app.use(express.static(path.join(__dirname, "/upload/files")));

mongoose.connect(connect_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const pusher = new Pusher({
  appId: config.appId,
  key: config.key,
  secret: config.secret,
  cluster: config.cluster,
  useTLS: true,
});

const db = mongoose.connection;
db.once("open", () => {
  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    if (change.operationType == "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
        roomId: messageDetails.roomId,
        doc: messageDetails.doc,
      });
    } else {
    }
  });
});

app.get("/messages/sync/:roomId", (req, res) => {
  Messages.find({ roomId: req.params.roomId }, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.status(200).send(data);
    }
  });
});
app.delete("/messages/clear/:roomId", (req, res) => {
  Messages.deleteMany({ roomId: req.params.roomId }, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.status(200).send("cleared");
    }
  });
});

app.post("/messages/new", (req, res) => {
  const message = req.body;
  Messages.create(message, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.status(200).send(data);
    }
  });
});

app.post("/messages/fileupload", async (req, res) => {
  try {
    let name;
    let timestamp;
    let received;
    let roomId;
    let filePath;

    await Messages.uploadedFile(req, res, async (err) => {
      if (err) {
        return;
      }
      name = req.body.name;
      timestamp = req.body.timestamp;
      received = req.body.received;
      roomId = req.body.roomId;
      if (req.file) {
        filePath = req.file.filename;
      }
      try {
        const message = new Messages({
          name: name,
          timestamp: timestamp,
          received: received,
          roomId: roomId,
          doc: filePath,
        });

        await message.save();
      } catch (err) {
        return res.status(500).send("error");
      }
    });
    return res.status(200).json("success");
  } catch (err) {
    return res.status(500).send("Server Error");
  }
});

app.post("/rooms/new", (req, res) => {
  const room = req.body;
  Rooms.create(room, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.status(200).send(data);
    }
  });
});

app.get("/rooms", (req, res) => {
  Rooms.find((err, data) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.status(200).send(data);
    }
  });
});

app.get("/room/:roomId", (req, res) => {
  Rooms.find({ _id: req.params.roomId }, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.status(200).send(data);
    }
  });
});

app.listen(PORT, () => {});
