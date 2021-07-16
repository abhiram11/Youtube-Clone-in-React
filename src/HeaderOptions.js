import React from "react";
import "./HeaderOptions.css";
import { Avatar } from "@material-ui/core";

function HeaderOptions({ Icon, avatar = false }) {
  return (
    <div className="headerOptions">
      {Icon && <Icon />}
      <div
        className="headerOptions__avatar"
        title="Click Me!"
        onClick={() => window.open("https://abhiram11.github.io", "_blank")}
      >
        {avatar && (
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADea4I5HL-IsHBtXW7Nh26jwXrnRbwmfay3pbLZCqNKRGQ=s32-c-mo" />
        )}
      </div>
    </div>
  );
}

export default HeaderOptions;
