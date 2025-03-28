import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"

const LoginPage=()=>{
    const [username,setUsername] = useState("");
    const navigate = useNavigate();

    const handleLogin=()=>{
        if (username.trim()!==""){
            localStorage.setItem("user",username);
            navigate("/todo")
        }
    };
    return(
        <div className="login-card">
            <div className="heading">
                <h2>Login</h2>
            </div>
            <div className="input-field">
                <input type="text" placeholder="Enter your name" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <button onClick={handleLogin} className="login-btn">Login</button>
            </div>
        </div>
    )
}

export default LoginPage;