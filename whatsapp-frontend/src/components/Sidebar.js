import React, { useState, useEffect } from "react";
import "../styles/sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, ButtonBase, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import axios from "../axios";
import { SidebarChat } from "./";

function Sidebar({ user, setProfileBar }) {
  const [drop, setDrop] = useState(false);
  const [rooms, setRooms] = useState([]);

  const createChat = async (e) => {
    e.preventDefault();
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        "/rooms/new",
        {
          name: roomName,
        },
        config
      );
    }
  };
  useEffect(() => {
    axios.get("/rooms").then((response) => {
      setRooms(response.data);
    });
  }, [rooms]);
  const handleClick = () => {
    setDrop(!drop);
  };

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <ButtonBase>
          <Avatar
            src={user.photoURL}
            onClick={() => {
              setProfileBar(true);
            }}
          />
        </ButtonBase>

        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton onClick={(e) => createChat(e)}>
            <ChatIcon />
          </IconButton>
          <div className="vertIcon">
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            {drop && (
              <div className="dropmenu_one">
                <ul>
                  <li onClick={(e) => createChat(e)}>Add new chat</li>
                  <li
                    onClick={() => {
                      setProfileBar(true);
                      setDrop(false);
                    }}
                  >
                    Profile
                  </li>
                  <li>Archived</li>
                  <li>Settings</li>
                  <li>Log out</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat createChat={createChat} />
        {rooms.map((room) => (
          <SidebarChat key={room._id} id={room._id} name={room.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
