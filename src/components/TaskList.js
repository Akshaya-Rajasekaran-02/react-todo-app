import React,  { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/todoSlice";
import axios from "axios";

const TaskList=()=>{
  const tasks=useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log("API Key:", API_KEY);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/banglore?unitGroup=us&key=${API_KEY}&contentType=json`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Weather API Error:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <h3>Your Tasks are Listed below:</h3>
      {weather && (
        <p>
          Current Weather: {weather.days.temp}°C, {weather.description}
        </p>
      )}
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id}  className="list-group-item d-flex justify-content-between align-items-center">
            {task.name} <strong>{task.priority}</strong>
            <button onClick={() => dispatch(deleteTask(task.id))} className="btn btn-danger btn-sm">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
