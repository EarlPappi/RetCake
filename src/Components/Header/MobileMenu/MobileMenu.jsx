import classes from "../DesktopMenu/DesktopMenu.module.css";
import cartIcon from "../../../Assets/shopping-cart.png";
import { useAuth } from "../../../Context/AuthContext";
import { Link, NavLink } from "react-router-dom";

const MobileMenu = () => {

    const { loggedIn, user } = useAuth();

    

    return (
        <nav className={classes.desktopMenuCon}>


            {!loggedIn && <NavLink to="login">Login</NavLink>}
            {!loggedIn && <NavLink to="signup">Signup</NavLink>}


            {loggedIn &&
                <div className={classes.profileCon}>
                    <div>
                        <Link to="/cart"> <img src={cartIcon} alt="" /></Link> 
                    </div>

                    <p >Hello, {user?.email}</p>
                </div>
            }



        </nav>
    );
}

export default MobileMenu;