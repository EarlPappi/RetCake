import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Btn.module.css"

const Btn = ({ children, Style, To }) => {
    const [alt, setAlt] = useState();

    { Style ? setAlt({
        color: "#A01114",
        backgroundColor: "white",
        border: "1px solid #A01114"
        
    }) : setAlt()}
    

    return ( 
        <Link to={ To } className={ classes.linkBtn } style={ alt }>{ children }</Link>
     );
}
 
export default Btn;