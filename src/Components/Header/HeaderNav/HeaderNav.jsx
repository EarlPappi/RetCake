// import { useAuth } from "../../../Context/AuthContext";
import { Link } from "react-router-dom";
import logo from "../../../Assets/RetCake.png";
import Wrapper from "../../TinyComp/Wrapper";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import MobileMenu from "../MobileMenu/MobileMenu";
import classes from "./HeaderNav.module.css"

const HeaderNav = () => {


    return (
        <div className={classes.headerCon}>
            <Wrapper>
                <div className={classes.innerHeaderCon}>

                    <div  className={ classes.imgHead }>
                        <Link to="/"> <img src={logo} alt="RetCake Logo" /></Link>
                    </div>


                    <div className={classes.deskMenu} >
                        <DesktopMenu />

                    </div>

                    <div className={ classes.mobMenu }>
                        <MobileMenu/>
                    </div>
                </div>

            </Wrapper>
        </div>
    );
}

export default HeaderNav;