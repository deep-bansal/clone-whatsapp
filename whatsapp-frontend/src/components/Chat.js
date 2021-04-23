import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  MicOutlined,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import axios from "../axios";
import Pusher from "pusher-js";
import React, { useEffect, useState } from "react";
import "../styles/chat.css";
import { useParams } from "react-router-dom";
import { Contact } from "./";
import { Fragment } from "react";

function Chat({ user }) {
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  const { seed } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [drop, setDrop] = useState(false);
  const [optns, setOptns] = useState(false);
  const [file, setFile] = useState(null);
  const [contactSec, setContactSec] = useState(false);
  const [width, setWidth] = useState("0.7");

  useEffect(() => {
    if (roomId) {
      axios.get(`messages/sync/${roomId}`).then((response) => {
        setMessages(response.data);
      });
    }
  }, [roomId]);
  useEffect(() => {
    const pusher = new Pusher("1c8efe6427d0e8bf5a05", {
      cluster: "eu",
    });
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  useEffect(() => {
    if (roomId) {
      axios.get(`/room/${roomId}`).then((response) => {
        setRoomName(response.data[0].name);
      });
    }
  }, [roomId]);
  const currentdate = new Date();

  const sendMessage = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.post(
      "messages/new",
      {
        message: input,
        name: user.displayName,
        timestamp: currentdate.getHours() + ":" + currentdate.getMinutes(),
        received: user.email,
        roomId: roomId,
      },
      config
    );
    setInput("");
  };

  const handleChange = async (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const data = new FormData();
      data.append("name", user.displayName);
      data.append(
        "timestamp",
        currentdate.getHours() + ":" + currentdate.getMinutes()
      );
      data.append("received", user.email);
      data.append("roomId", roomId);
      data.append("doc", file);
      await axios.post("/messages/fileupload", data);
      setFile(null);
    } else {
      alert("Please add a file");
      return;
    }
  };
  const handleClearMessages = (e) => {
    e.preventDefault();
    axios.delete(`messages/clear/${roomId}`);
    setMessages([]);
  };

  return (
    <div className="chat" style={{ flex: `${width}` }}>
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3>{roomName}</h3>
          <p>
            Last seen at{" "}
            {currentdate.getHours() + ":" + currentdate.getMinutes()}
          </p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <div className="vertIcon">
            <IconButton
              onClick={() => {
                setDrop(!drop);
              }}
            >
              <MoreVert />
            </IconButton>
            {drop && (
              <div className="dropmenu">
                <ul>
                  <li
                    onClick={() => {
                      setContactSec(true);
                      setDrop(false);
                      setWidth("0.4");
                    }}
                  >
                    Contact Info
                  </li>
                  <li onClick={handleClearMessages}>Clear Messages</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="chat_body">
        {messages &&
          messages.map((msg, idx) => {
            return (
              <p
                key={idx}
                className={`chat_message ${
                  msg.received === user.email ? "chat_receiver" : ""
                }`}
              >
                <span className="chat_name">{msg.name}</span>
                {msg.message}
                {msg.doc && (
                  <Fragment>
                    <div className="doc">
                      <img
                        className="doc-icon"
                        alt="doc"
                        src="https://icon-library.com/images/document-icon-images/document-icon-images-2.jpg"
                      />
                      <a
                        href={`http://localhost:9000/${msg.doc}`}
                        // target="_blank"
                      >
                        {msg.doc}
                      </a>
                    </div>
                    <span className="chat_timestamp_2">{msg.timestamp}</span>
                  </Fragment>
                )}
                {!msg.doc && (
                  <span className="chat_timestamp">{msg.timestamp}</span>
                )}
              </p>
            );
          })}
      </div>
      <div className="chat_footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <div className="attachment">
          {optns && (
            <div className="attachement_optns">
              <form onSubmit={handleFileSubmit}>
                <label htmlFor="doc-input">
                  <img
                    src="https://i.pinimg.com/originals/e2/6f/33/e26f33f35d71a5c5c23b8291d7a2b212.png"
                    alt="addDoc"
                  />
                </label>
                <input
                  type="file"
                  name="file"
                  id="doc-input"
                  onChange={(e) => handleChange(e)}
                />
                <button type="Submit">Upload Doc</button>
              </form>
            </div>
          )}
          <IconButton
            className="attach_file"
            onClick={() => {
              setOptns(!optns);
            }}
          >
            <AttachFile />
          </IconButton>
        </div>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <IconButton>
          <MicOutlined />
        </IconButton>
      </div>
      {contactSec && (
        <Contact
          setContactSec={setContactSec}
          setWidth={setWidth}
          roomName={roomName}
          seed={seed}
        />
      )}
    </div>
  );
}

export default Chat;
