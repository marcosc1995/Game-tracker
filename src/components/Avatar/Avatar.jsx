import React from "react";
import "./Avatar.css";
import avatarPic from "./ProfilePic.jpg";

export default function Avatar() {
  return (
    <>
      <div className="avatar-container">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${avatarPic})` }}
        ></div>
      </div>
    </>
  );
}
