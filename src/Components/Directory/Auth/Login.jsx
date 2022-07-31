import { Link } from "react-router-dom";
import classes from "./Auth.module.css";

const Login = () => {
    return (
        <div className={classes.authCon}>
            <div className={classes.formCon}>
                    <form action="">
                        <h2>Welcome back</h2>

                        <input type="email" placeholder="Enter Email Address" name="" id="" />
                        <input type="password" placeholder="Enter Password" name="" id="" />

                        <p>Don't have an account? Click <Link to="../signup">here</Link> to signup</p>
                        <p>Forgot Password? Click <Link to="../reset-password">here</Link> to Reset password</p>

                        <button>Login</button>



                    </form>
            </div>
        </div>
    );
}

export default Login;