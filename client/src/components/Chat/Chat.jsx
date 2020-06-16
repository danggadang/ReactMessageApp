import React, {useState, useEffect} from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";
let socket;
const Chat = ({location})=>{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = "localhost:5000";

    useEffect(()=>{
        const test = location.search.split("?");
        const nameTest = test[1].split("=");
        const roomTest = test[2].split("=");
        console.log(nameTest[1]);
        console.log(roomTest[1]);
        setName(nameTest[1]);
        setRoom(roomTest[1]);
        socket = io(ENDPOINT);
        console.log(name);
        console.log(room);
        //exact to the receiving end
        socket.emit("join", {name, room});
    }, [location.search]);
    return (
        <h1>Hello there! Chat</h1>
    )
}
export default Chat;