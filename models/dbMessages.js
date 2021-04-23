const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const FILE_PATH = path.join("/upload/files");

const whatsappSchema = new mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: String,
  roomId: String,
  doc: String,
});

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("upload/files"));
  },
  filename: function (req, file, cb) {
    const arr = file.originalname.split(".");
    cb(null, file.fieldname + "-" + Date.now() + "." + arr[arr.length - 1]);
  },
});

whatsappSchema.statics.uploadedFile = multer({ storage: storage }).single(
  "doc"
);
whatsappSchema.statics.filePath = FILE_PATH;

module.exports = mongoose.model("messagecontents", whatsappSchema);
