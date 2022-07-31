import classes from "./Auth.module.css";
import { Link } from "react-router-dom";


const Signup = () => {
    return (
        <div className={classes.authCon}>
            <div className={classes.formCon}>
                <form action="">
                    <h2>Signup</h2>

                    <input type="email" placeholder="Enter Email Address" name="" id="" />
                    <input type="password" placeholder="Enter Password" name="" id="" />
                    <input type="password" placeholder="Enter Password Again" name="" id="" />

                    <p>Have an account? Click <Link to="../login">here</Link> to login</p>

                    <button>Signup</button>



                </form>
            </div>
        </div>
    );
}

export default Signup;