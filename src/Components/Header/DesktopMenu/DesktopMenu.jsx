import classes from "./DesktopMenu.module.css";
import cartIcon from "../../../Assets/shopping-cart.png";
import userIcon from "../../../Assets/user.png";
import { useAuth } from "../../../Context/AuthContext";
import { NavLink } from "react-router-dom";

const DesktopMenu = () => {
    const { loggedIn, user } = useAuth();


    return (
        <nav className={classes.desktopMenuCon}>

            { !loggedIn && <NavLink to="login">Login</NavLink> }
            { !loggedIn && <NavLink to="signup">Signup</NavLink> }
         


            {loggedIn &&
                <div className={classes.profileCon}>
                    <div>
                        <img src={cartIcon} alt="" />
                        <img src={userIcon} alt="" />
                    </div>

                    <p>Hello, { user?.email }</p>
                </div>
            }

            

        </nav>
    );
}

export default DesktopMenu;