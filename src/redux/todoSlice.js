import { createSlice } from "@reduxjs/toolkit";

const loadTasks = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
};

const initialState = {
  tasks: loadTasks(),
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
