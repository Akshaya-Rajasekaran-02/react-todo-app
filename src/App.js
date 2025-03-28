import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return(
    <div className="bg-page">
      <div className="container mt-4">
        <h2 className="text-center heading-color">To-Do Application</h2>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/todo" element={<TodoPage/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  )
};

export default App;
