import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Join.css";
const Join = ()=>{
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    return (
        <div className="joinOuterContainer">
            <div className="joinInterContainer">
                <h1 className="heading">Join</h1>
                <div><input type="text" className="joinInput" placeholder="Name" onChange={(event)=>{setName(event.target.value);}}/></div>
                <div><input type="text" className="joinInput mt-20" placeholder="Room" onChange={(event)=>{setRoom(event.target.value);}}/></div>
                <Link onClick={(event)=>(!name||!room)?event.preventDefault():null} to={`/chat?name=${name}?room=${room}`}>
                    <button className="joinButton mt-20">Sign In</button>
                </Link>
            </div>
        </div>
    )
}
export default Join;