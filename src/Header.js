import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOptions from "./HeaderOptions";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <div
          className="header__leftLogo"
          onClick={() => window.open("https://www.youtube.com/", "_blank")}
        >
          {" "}
          <YouTubeIcon /> YouTube
        </div>
      </div>

      <div className="header__center">
        <form>
          <input placeholder="Search" />{" "}
          <button>
            {" "}
            <SearchIcon />{" "}
          </button>{" "}
          <MicIcon />
        </form>
      </div>
      <div className="header__right">
        {/* use headerOptions type handling here, or make them in one div and justify space between with a max width */}
        <div className="header__rightIcons">
          <HeaderOptions Icon={VideoCallIcon} />
          <HeaderOptions Icon={AppsIcon} />
          <HeaderOptions Icon={NotificationsIcon} />
          <HeaderOptions avatar={true} />
        </div>
      </div>
    </div>
  );
}

export default Header;
