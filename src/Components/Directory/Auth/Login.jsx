import classes from "./Auth.module.css";

const Login = () => {
    return ( 
        <div className={ classes.authCon }>
           <div className={ classes.formCon }>
               <form action="">
                   <h2>Welcome back</h2>

                   <input type="email" placeholder="Enter Email Address" name="" id="" />
                   <input type="password" placeholder="Enter Password" name="" id="" />

                   <p>Don't have an account? Click <a href="/signup">here</a> to signup</p>

                   <button>Login</button>
                   


               </form>
           </div>
        </div>
     );
}
 
export default Login;