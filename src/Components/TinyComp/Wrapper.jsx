import classes from "./Wrapper.module.css"
const Wrapper = ({ children }) => {
    return ( 
        <div className={ classes.wrapperCon }>
            { children }
        </div>
     );
}
 
export default Wrapper;