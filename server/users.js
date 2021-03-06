const users=[];

const addUser=({id, name, room})=>{
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user)=>user.room==room && user.name==name);
    if(existingUser){
        return {error:"Username has already taken!"};
    }
    const user = {id, name, room};
    users.push(user);
    return {user};
}
const removeUser=(id)=>{
    const userIndex = users.findIndex((user)=>user.id===id);
    if(userIndex!==-1){
        return users.splice(index, 1)[0];
    }else{
        return {error: "Error with delete user!"};
    }
}
// const getUser=(id)=>{
//     console.log("users in users", users);
//     const user= users.find((user)=>user.id===id);
//     return user;
// }
const getUser = (id) => users.find((user) => user.id === id);
const getUsersInRoom=(room)=>{
    users.filter((user)=>user.room===room);
}

module.exports = {addUser, removeUser, getUser, getUsersInRoom};