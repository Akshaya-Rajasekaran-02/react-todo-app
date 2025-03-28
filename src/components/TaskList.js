import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/todoSlice";
import axios from "axios";

const TaskList=()=>{
  const tasks=useSelector((state) => state.todos.tasks);
  const dispatch=useDispatch();
  const [weather, setWeather] = useState(null);

  const API_KEY=process.env.REACT_APP_API_KEY; 
  console.log("API Key:", API_KEY);

  useEffect(() => {
    if (!API_KEY) {
      console.error("API_KEY is missing!");
      return; // Stop execution if API_KEY is missing
    }

    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/banglore?unitGroup=metric&key=${API_KEY}&contentType=json`
        );
        
        console.log("Weather Data:", response.data);
        setWeather(response.data);
      } catch (error) {
        console.error("Weather API Error:", error);
      }
    };

    fetchWeather();
  }, [API_KEY]); 
  return (
    <div>
      <h3>Your Tasks are Listed below:</h3>
      {console.log(weather.days[0].temp)}
      {weather && weather.days && weather.days.length > 0 && (
        <p>
           🌥️Current Weather: {weather.days[0].temp}°C, 📍Location:{weather.address}, {weather.description}
        </p>
      )}
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            {task.name} <strong>{task.priority}</strong>
            <button onClick={() => dispatch(deleteTask(task.id))} className="btn btn-danger btn-sm">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
