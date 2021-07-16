import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarOptions Icon={HomeIcon} title="Home" />
      <SidebarOptions Icon={ExploreIcon} title="Explore" />
      <SidebarOptions Icon={SubscriptionsIcon} title="Subscriptions" />
      <SidebarOptions Icon={VideoLibraryIcon} title="Library" />
    </div>
  );
}

export default Sidebar;
