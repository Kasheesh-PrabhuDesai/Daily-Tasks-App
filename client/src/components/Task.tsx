import React from "react";
import AddTask from "./AddTask";
import {io} from "socket.io-client";
import Navbar from "./Navbar";
import TasksContainer from "./TasksContainer";

/*
👇🏻  Pass Socket.io into the required components
    where communications are made with the server
*/
const socket = io("http://localhost:4000");

const Task = () => {
    return (
        <div>
            <Navbar />
            <AddTask socket={socket} />
            <TasksContainer socket={socket} />
        </div>
    );
};

export default Task;