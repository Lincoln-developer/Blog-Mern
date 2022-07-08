import React, {useState, useEffect} from "react";
import loginService from "../services/login";
import authService from "../context/useToken";
//import axios from "axios"
//import PropTypes from "prop-types";
//import axios from "axios";
//import axios from "axios";
//const LOGIN_URL = "http://localhost:3100/api/v1/users/accounts/login";

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    useEffect(() => {
        const LoggedUserJSON = window.localStorage.getItem('loggedNotappUser');
        if(LoggedUserJSON){
            const user = JSON.parse(LoggedUserJSON)
            setUser(user)
            authService.setToken(user.token)
        }
    },[])
    const loginSubmitHandler = async event => {
        event.preventDefault();
        console.log(user)
      
        try{
            const user = await loginService.login({
                name,
                password
            })
            window.localStorage.setItem(
                "loggedNotappUser", JSON.stringify(user)
            )
            authService.setToken(user.token)
            setUser(user);
            setName('');
            setPassword('');
        }catch(err){
            console.log("Wrong credentials", err)
        }
    }
    return (
        
        <div>
            <h1>login to your account</h1>
            <form onSubmit={loginSubmitHandler}>
                <div>
                    <label htmlFor="name">Username</label>
                    <input
                    id="name"
                    type="text"
                    value={name}
                    placeholder="Enter username"
                    onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                    id="password"
                    type="password"
                    value={password}
                    placeholder="Enter password"
                    onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit"> Login </button>
                </div>
            </form>
        </div>
    )
}

export default Login