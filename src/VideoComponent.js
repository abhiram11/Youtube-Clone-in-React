import React from "react";
import "./VideoComponent.css";
import { Avatar } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

//add lazy loading afterwards!

function VideoComponent({
  videoUrl,
  previewUrl,
  title,
  photoUrl,
  user,
  description,
}) {
  return (
    <div
      className="videoComponent"
      onClick={() => (videoUrl ? window.open(videoUrl, "_blank") : null)}
    >
      <img src={previewUrl} alt="Preview" />
      <div className="videoComponent__info">
        <Avatar className="videoComponent__infoAvatar" src={photoUrl} />
        <div className="videoComponent__infoText">
          <h4>{title}</h4>
          <h5 className="videoComponent__infoTextUser">{user}</h5>
          <h5>{description}</h5>
        </div>
        <div className="videoComponent__infoExtra">
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
}

export default VideoComponent;
