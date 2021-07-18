import React from "react";
import "./SidebarOptions.css";
import { justAnAlert } from "./App";

function SidebarOptions({ Icon, title }) {
  return (
    <div className="sidebarOptions" onClick={justAnAlert}>
      {Icon && <Icon />}
      {title}
    </div>
  );
}

export default SidebarOptions;
