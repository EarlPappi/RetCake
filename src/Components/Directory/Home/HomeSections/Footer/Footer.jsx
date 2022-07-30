import Wrapper from "../../../../TinyComp/Wrapper";
import classes from "./Footer.module.css"

const Footer = () => {
    return ( 
        <div className={ classes.footerCon }>
            <Wrapper>
                <div className={ classes.footerInner }>
                    <nav>
                        <a href="./">About Us</a>
                        <a href="./">Catalog</a>
                        <a href="./">Contact Us</a>
                    </nav>

                    <div>
                        <p>Copyright 2021 RetCake & Delight - All Right Reserved.</p>
                    </div>
                </div>
            </Wrapper>
        </div>
     );
}
 
export default Footer;
<div>
    Footer Here
</div>