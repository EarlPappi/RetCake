import Wrapper from "../../../../TinyComp/Wrapper";
import cakeImg from "../../../../../Assets/three-cupcakes.png";
import classes from "./AboutSection.module.css"

const AboutSection = () => {
    return ( 
        <Wrapper>
            <div className={ classes.aboutSecCon }>
                <div className={ classes.aboutImgcon }>
                    <img src={ cakeImg } alt="" width="100%"/>                    
                </div>

                <div className={ classes.aboutText }>
                    <h1>Our History - RetCake</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nemo, perferendis porro explicabo fugiat autem voluptate totam facere eius quibusdam! Aut reprehenderit nihil cum, optio maiores id! Iure, explicabo? Odio aspernatur ipsa provident doloremque aliquid dolore veritatis. A, exercitationem sunt ratione vero ex ea, quae, totam est doloremque eaque maxime!</p>
                </div>
            </div>
        </Wrapper>
     );
}
 
export default AboutSection;