import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "../styles/sidebarChat.css";
import { Link } from "react-router-dom";
import axios from "../axios";

function SidebarChat({ id, name, addNewChat, createChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessage] = useState([]);
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  useEffect(() => {
    axios.get(`messages/sync/${id}`).then((response) => {
      response.data.reverse();
      setMessage(response.data);
    });
  }, [id]);
  return !addNewChat ? (
    <Link to={`/rooms/${id}/${seed}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat_info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={(e) => createChat(e)} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
