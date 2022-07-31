import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import classes from "./Auth.module.css";


const Login = () => {

    const { login, setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    const [ userEmail, setUserEmail ] = useState("");
    const [userPassword, setUserPassword] = useState("");   
    const [isError, setIsError] = useState(false); 
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isLoading, setisLoading] = useState(false);

    const handleSignup = async (e) =>{
        e.preventDefault();
        setisLoading(true)

        // checking for empty email or password
        if (userEmail.trim().length === 0 || userPassword.trim().length === 0) {
            setIsValid(false);
            setisLoading(false);
            setIsError(true);
            setError('Email or password cannot be empty')
            return;
        }

        if(isValid){
            try{
                await login(userEmail, userPassword);
                setisLoading(false);
                navigate('/');
                setError('')
                setIsLoggedIn(true)
                return


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
                        <h2>Welcome back</h2>

                        {isError && <p>{ error }</p>}

                        <input type="email" placeholder="Enter Email Address" name="" id="" onChange={(e)=>{
                            setUserEmail(e.target.value);
                        }}/>
                        <input type="password" placeholder="Enter Password" name="" id="" onChange={(e)=>{
                            setUserPassword(e.target.value);
                        }}/>

                        <p>Don't have an account? Click <Link to="../signup">here</Link> to signup</p>
                        <p>Forgot Password? Click <Link to="../reset-password">here</Link> to Reset password</p>

                        <button>{ isLoading ? "Working it, hold on" : "Login"}</button>



                    </form>
            </div>
        </div>
    );
}

export default Login;