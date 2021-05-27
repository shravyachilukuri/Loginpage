import React from 'react';
import { useState} from "react";
import { useDispatch } from "react-redux";
import { Logedin } from "../actions";


const Login = () => {
const [name,setName] = useState("");
const [email,setMail] = useState("");
const [password,setPassword] = useState("");

const dispatch = useDispatch();

const handleSubmit=(e) =>{
    e.preventDefault();
    dispatch(Logedin({
        name : name,
        email : email,
        password : password,
        loggedIn : true
    }
    ))
}
    return (
        <div>
            <h3>Login Here</h3>
           <form onSubmit={(e) => handleSubmit(e)}>
           <input type="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} >
               </input>
         <input type="email" placeholder="Email" value={email} onChange={(e)=>setMail(e.target.value)} >
               </input>
               <input type="password" placeholder="Password" value ={password} onChange={(e)=>setPassword(e.target.value)}>
               </input>                
            <button type="submit"> Login  </button>
           </form> 
        </div>
    )
}

export default Login
