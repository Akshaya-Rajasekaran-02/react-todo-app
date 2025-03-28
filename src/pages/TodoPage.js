import React from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { useNavigate } from "react-router-dom";
import "./TodoPage.css";

const TodoPage=()=>{
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div>
      <h2>To-Do List</h2>
      <TaskInput />
      <TaskList />
      <div className="logout-btn-alignment">
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default TodoPage;
