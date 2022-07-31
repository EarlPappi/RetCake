import classes from "./Auth.module.css";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
    return ( 
        <div className={classes.authCon}>
            <div className={classes.formCon}>
                    <form action="">
                        <h2>Reset Password</h2>

                        <input type="email" placeholder="Enter Email Address" name="" id="" />

                        <p>Don't have an account? Click <Link to="../signup">here</Link> to signup</p>

                        <button>Reset Password</button>



                    </form>
            </div>
        </div>
     );
}
 
export default ForgetPassword;