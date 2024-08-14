import React, { useState } from 'react';
import './Login.css';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();



    // const handleLogin = (e) => {
    //     e.preventDefault();

    //     AuthService.login(email, password).then(
    //         (response) => {
    //             console.log("Logged in successfully!", response);
    //             navigate('/');
    //             // Redirect or update UI
    //         },
    //         (error) => {
    //             console.log("Login failed!", error);
    //         }
    //     );
    // };


    return (

        <div className="loginsignupp">
        <div className="container">
            <h1>Login <span>Now</span></h1>
            {/* <form action="
                " onSubmit={handleLogin} > */}
            <div className="fields">
               
                <input type="email" name="email" placeholder='Your Email' id=""  value={email}  onChange={(e) => setEmail(e.target.value)} />

                <input type="password" name="password" placeholder='Write Your Password' id="" value={password}  onChange={(e) => setPassword(e.target.value)} />

              
            </div>
             

            <br />
            <button  type="submit" >
                Continue
            </button>
            {/* </form> */}
            <div className="login">
              
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.  <span><a href="/Register">Register</a></span>
            </div>
           

        </div>
    </div>
    
     
   

    );
};

export default Login;
