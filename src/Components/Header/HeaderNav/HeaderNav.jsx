// import { useAuth } from "../../../Context/AuthContext";
import logo from "../../../Assets/RetCake.png";
import Wrapper from "../../TinyComp/Wrapper";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import classes from "./HeaderNav.module.css"

const HeaderNav = () => {


    return (
        <div className={classes.headerCon}>
            <Wrapper>
                <div className={classes.innerHeaderCon}>

                    <div  className={ classes.imgHead }>
                        <img src={logo} alt="RetCake Logo" />
                    </div>


                    <div className={classes.deskMenu} >
                        <DesktopMenu />

                    </div>
                </div>

            </Wrapper>
        </div>
    );
}

export default HeaderNav;