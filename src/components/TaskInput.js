import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todoSlice";

const TaskInput=()=>{
    const [task,setTask] = useState("");
    const [priority, setPriority] = useState("Medium");
    const dispatch = useDispatch();

    const handleAddTask=()=>{
        if (task.trim()!==""){
            dispatch(addTask({id:Date.now(),name:task,priority }));
            setTask("");
        }
    }
    return(
        <div className="input-group my-3">
            <input type="text" className="form-control" placeholder="Enter Task" value={task} onChange={(e) => setTask(e.target.value)}/>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button onClick={handleAddTask} className="btn btn-success">Add Task</button>
        </div>
    );
};

export default TaskInput;