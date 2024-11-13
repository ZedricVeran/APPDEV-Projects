import { useState } from "react";
import Reviews from "./Reviews";

export default function Login() {
    const account = [{
        id: 1,
        username: "admin",
        password: "admin"
    }];
    
    // Boolean for logging in 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // For entered credentials
    const [userName, setEnteredUsernames] = useState("");
    const [passWord, setEnteredPasswords] = useState("");

    // Get username
    function handleUserNameChange(event) {
        setEnteredUsernames(event.target.value);
    }

    // Get password
    function handlePasswordChange(event) {
        setEnteredPasswords(event.target.value);
    }

    // Login process
    function handleLogin() {
        account.map((account) => {
            if (account.username === userName && account.password === passWord) {
                setIsLoggedIn(true);
            }
        });
    }
        
    // Render login form
    const renderLoginForm = () => {
        return (
            <div className="login-container">
                <h1>Welcome to Wormmmy's Reviews!</h1>
                <h4>Login to Continue:</h4>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" onChange={handleUserNameChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={handlePasswordChange} />
                </div>
                <button className="login-btn" type="button" onClick={handleLogin}>Login</button>
            </div>
        );
    }

    // Handle render the review page
    function renderRev() {
        return (<Reviews />);
    }

    // Handling render components
    if (isLoggedIn === false) {
        return renderLoginForm();
    } else {
        return renderRev();
    }
}
