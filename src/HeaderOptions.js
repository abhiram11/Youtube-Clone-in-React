import React from "react";
import "./HeaderOptions.css";

function HeaderOptions({ Icon, avatar = false }) {
  return <div className="headerOptions">{Icon && <Icon />}</div>;
}

export default HeaderOptions;
