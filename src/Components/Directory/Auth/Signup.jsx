import classes from "./Auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import React, { useState } from 'react';



const Signup = () => {
   
    const { signup } = useAuth();
    const navigate = useNavigate();

    const [userEmail, setUserEmail ] = useState("");
    const [userPassword, setUserPassword] = useState("");   
    const [userPasswordConfirm, setUserPasswordConfirm] = useState("");   

    const [isErorr, setIsError] = useState(false); 
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isLoading, setisLoading] = useState(false);



    const handleSignup = async (e) =>{
        e.preventDefault();
        setisLoading(true);

        if(userEmail.trim().length === 0 || userPassword.trim().length === 0){
            isLoading(false);
            setError("Email or Password cannot be empty");
            setIsError(true)
            setIsValid(false);
            return;
        }

        if(userPassword !== userPasswordConfirm){
            isLoading(false);
            setError("Password do not match");
            setIsError(true)
            setIsValid(false);
            return;
        }

        if(isValid){
            try{
                await signup(userEmail, userPassword);
                setisLoading(false);
                navigate("/login");
                setError("");
                setIsError(false);
                return;

            }catch (e){
                setError(e.message);
                setIsError(true);
                setisLoading(false);
                return
            }
        }


    }

    return (
        <div className={classes.authCon}>
            <div className={classes.formCon}>
                <form action="" onSubmit={handleSignup}>
                    <h2>Signup</h2>
                    { isErorr && <p>{ error }</p>}

                    <input type="email" placeholder="Enter Email Address" name="" id="" onChange={(e)=>{
                        setUserEmail(e.target.value);
                    }}/>
                    <input type="password" placeholder="Enter Password" name="" id="" onChange={(e)=>{
                        setUserPassword(e.target.value);
                    }}/>
                    <input type="password" placeholder="Enter Password Again" name="" id="" onChange={(e)=>{
                        setUserPasswordConfirm(e.target.value);
                    }}/>

                    <p>Have an account? Click <Link to="../login">here</Link> to login</p>

                    <button>{ isLoading ? "Signing Up" : "Sign Up" }</button>



                </form>
            </div>
        </div>
    );
}

export default Signup;