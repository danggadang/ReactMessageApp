const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;
const router = require("./router");
const app =express();
const server = http.createServer(app);
const io= socketIO(server);
io.on("connection", (socket)=>{
    console.log("A new connection");
    socket.on("join", (data)=>{
        console.log(data);
    })
    socket.on("disconnect",()=>{
        console.log("User had left");
    });
})
app.use(router);

server.listen(PORT, ()=>{console.log(`Server has started on ${PORT}`)});
