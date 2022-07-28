import Wrapper from "../../../../TinyComp/Wrapper";
import bgCake from "../../../../../Assets/vanilla-ice-cream-cake.png";
import classes from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={classes.heroCon}>
            <div className={classes.hero} style={{
                backgroundImage: `url(${bgCake})`
            }}>
                <div className={classes.heroDarkOverlay}>
                    <Wrapper>

                        <h1>Ret Cake & Delight</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non recusandae libero perferendis, cum veniam quaerat.</p>

                        <div>
                            <span>Birthday</span>
                            <span>Wedding</span>
                            <span>Festival</span>
                        </div>

                    </Wrapper>
                </div>
            </div >
        </div>
    );
}

export default Hero;