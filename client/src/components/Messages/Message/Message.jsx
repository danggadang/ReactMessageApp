import React from "react";
import "./Message.css";
const Message = ({ message:{user, text}, name }) => {
	let isSentByCurrentUser=false;
	const trimmedName=name.trim().toLowerCase();
	if(user===trimmedName){
		isSentByCurrentUser=true;
	}
    return(
        isSentByCurrentUser?(
			<div className="messageContainer justifyEnd">
				<p className="sendText pr-10">{trimmedName}</p>
				<div className="messageBox backgroundBlue">
					<div className="messageText colorWhite">{text}</div>
				</div>
			</div>
        ):(
			<div className="messageContainer justifyStart">
				<div className="messageBox backgroundLight">
					<div className="messageText colorDark">{text}</div>
				</div>
				<p className="sendText pl-10">{user}</p>
			</div>
        )
    )
    
}
export default Message;