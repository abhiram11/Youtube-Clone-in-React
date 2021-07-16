import React from "react";
import "./SidebarOptions.css";

function SidebarOptions({ Icon, title }) {
  return (
    <div className="sidebarOptions">
      {Icon && <Icon />}
      {title}
    </div>
  );
}

export default SidebarOptions;
