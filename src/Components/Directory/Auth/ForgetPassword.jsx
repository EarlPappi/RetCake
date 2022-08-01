import classes from "./Auth.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
    const { resetPassword } = useAuth();
    const navigate = useNavigate();

    const [userEmail, setUserEmail] = useState('')

    const [error, setError] = useState("");
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [isValid, setIsValid] = useState(true)

    const handleReset = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (userEmail.trim().length === 0) {
            setError("Email cannot be empty");
            setIsError(true);
            setIsLoading(false);
            setIsValid(false);
        }

        if (isValid) {
            try {
                await resetPassword(userEmail);
                setIsLoading(false);
                navigate("/login");
                alert("Check your email to reset your password");
                return;



            } catch (e) {
                setError(e.message);
                setIsError(true);
                setIsLoading(false)
                return;
            }
        }



    }

    return (
        <div className={classes.authCon}>
            <div className={classes.formCon}>
                <form action="" onSubmit={handleReset}>
                    <h2>Reset Password</h2>
                    <p>{isError && { error }}</p>

                    <input type="email" placeholder="Enter Email Address" name="" id="" onChange={(e) => {
                        setUserEmail(e.target.value);
                    }} />

                    <p>Don't have an account? Click <Link to="../signup">here</Link> to signup</p>

                    <button>{isLoading ? "Loading" : "Reset Password"}</button>



                </form>
            </div>
        </div>
    );
}

export default ForgetPassword;