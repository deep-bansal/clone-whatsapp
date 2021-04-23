import { IconButton } from "@material-ui/core";
import { ClearOutlined } from "@material-ui/icons";
import React from "react";
import "../styles/contact.css";
function Contact({ setContactSec, setWidth, roomName, seed }) {
  return (
    <div className="contact">
      <div className="contact_header">
        <IconButton
          onClick={() => {
            setContactSec(false);
            setWidth("0.7");
          }}
          style={styles.button}
        >
          <ClearOutlined style={styles.icon} />
        </IconButton>
        <span>Contact</span>
      </div>
      <div className="profile_body">
        <div className="profile_pic">
          <img
            alt="profile_pic"
            src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
          />
        </div>
        <div className="name_sec">
          <span>Contact Name</span>
          <br></br>
          <span className="text">{roomName}</span>
        </div>
        <div className="name_sec about_sec">
          <span>About</span>
          <br></br>
          <span className="text">Available</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  button: {
    height: "40px",
    width: "40px",
    position: "relative",
    top: "8px",
    marginRight: "10px",
    paddingLeft: 0,
  },
  icon: {
    fontSize: "40px",
  },
};

export default Contact;
