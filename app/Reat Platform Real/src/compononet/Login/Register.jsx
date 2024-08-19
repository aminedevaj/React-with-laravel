
import React, { useState } from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tel, setTel] = useState('');
    const navigate = useNavigate();

    // const handleRegister = (e) => {
    //     e.preventDefault();

    //     AuthService.register(name, email, password).then(
    //         (response) => {
    //             console.log("Registered successfully!", response);
    //             navigate('/Login');
    //             // Redirect or update UI
    //         },
    //         (error) => {
    //             console.log("Registration failed!", error);
    //         }
    //     );
    // };



  return (
    <div className="loginsignup">
        <div className="container">
            <h1>Register <span>Now</span></h1>
            {/* <form action="" onSubmit={handleRegister}> */}

           

            <div className="fields"> 
                <input type="text" name="name" placeholder='Your name' id="" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" name="email" placeholder='Your Email' id=""  value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="tel" name="tel" placeholder='Your Number' id="" value={tel} onChange={(e) => setTel(e.target.value)} />
                <input type="password" name="password" placeholder='Write Your Password' value={password} id="" onChange={(e) => setPassword(e.target.value)} />

            </div>
            <br />
            <button>
                Continue
            </button>
            {/* </form> */}
            <div className="login">
              
                Already have an account <span><a href="/Login">Login</a></span>
            </div>
            <div className="agree">
                <input type="checkbox" name="" id="" />
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>

        </div>
    </div>
    
 
  )
}

export default Register