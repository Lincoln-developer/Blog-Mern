import React from "react";
import Card from "../ui/card";
import { useState} from "react";
import axios from "axios";

const SignUpForm = () => {
    const [signUpInfor, setSignUpInfor] = useState({
        name:"",
        email:"",
        password:""
    })
    const createAccount = async event => {
        console.log(signUpInfor)
        event.preventDefault()
        await axios
        .post("http://localhost:3100/api/v1/users",
        {
           name:signUpInfor.name,
           email:signUpInfor.email,
           password:signUpInfor.password 
        }
        )
        .then(response => setSignUpInfor(response.data))
        
        setSignUpInfor("")
    }
    const handleChange = event => {
        setSignUpInfor({...signUpInfor,[event.target.name]:event.target.value})
    }
    return (
        <Card>
            <form onSubmit={createAccount}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                    id="name"
                    type="text"
                    placeholder="enter name"
                    name="name"
                    value={signUpInfor.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="enter email"
                    value={signUpInfor.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="confirm password"
                    value={signUpInfor.password}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <button type="submit">SignUp</button>
                </div>
            </form>
        </Card>
    )
}
export default SignUpForm