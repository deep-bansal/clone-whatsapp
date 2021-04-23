import { IconButton } from "@material-ui/core";
import { KeyboardBackspaceOutlined } from "@material-ui/icons";
import React from "react";
import "../styles/profile.css";

function Profile({ user, setProfileBar }) {
  return (
    <div className="profile">
      <div className="profile_header">
        <IconButton onClick={() => setProfileBar(false)} style={styles.button}>
          <KeyboardBackspaceOutlined style={styles.icon} />
        </IconButton>
        <span>Profile</span>
      </div>
      <div className="profile_body">
        <div className="profile_pic">
          <img alt="profile_pic" src={user.photoURL} />
        </div>
        <div className="name_sec">
          <span>Your Name</span>
          <br></br>
          <span className="text">{user.displayName}</span>
        </div>
        <div className="useless_text">
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
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
    color: "white",
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

export default Profile;
