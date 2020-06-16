const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const {addUser, removeUser, getUser, getUsersInRoom} = require("./users");

const PORT = process.env.PORT || 5000;
const router = require("./router");
const app =express();
const server = http.createServer(app);
const io= socketIO(server);

io.on("connection", (socket)=>{
    //emit: sending end, on: receiving end
    socket.on("join", ({name,room}, callback)=>{
        const {error, user} = addUser({id:socket.id, name, room});
        if(error) return callback(error);

        socket.emit("message", {user:"admin", text:`${user.name}, welcome to the room ${user.room}!`})
        //send message to everyone in that room beside the user
        socket.broadcast.to(user.room).emit("message", {user:"admin", text:`${user.name} has joined the room`});
        socket.join(user.room);
        callback();
    })
    socket.on("sendMessage", (message, callback)=>{
        console.log("socket", socket.id);
        const user = getUser(socket.id);
        console.log(user);
        io.to(user.room).emit("message", {user:user.name, text:message});
        callback();
    });
    
    socket.on("disconnect",()=>{
        console.log("User had left");
    });
});

app.use(router);

server.listen(PORT, ()=>{console.log(`Server has started on ${PORT}`)});
