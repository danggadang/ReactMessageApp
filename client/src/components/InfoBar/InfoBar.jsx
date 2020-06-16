import React from "react";
import "./Infobar.css";
import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";
const InfoBar = ({ room }) => {
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" scr={onlineIcon} alt="online image" />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            //it's bad practice to render the whole page but it works when dealing with query string in order to clear that
            <a href="/"><img src={closeIcon} alt="close" /></a>
        </div>
    </div>
}
export default InfoBar;