import { useParams } from "react-router";
import { useAuth } from "../../../../../Context/AuthContext";
import Wrapper from "../../../../TinyComp/Wrapper";
import classes from "./CakeDetails.module.css";

const CakeDetail = () => {
    const { cakes } = useAuth();
    const { id } = useParams();

    return (
        <div>
            <Wrapper>
                <div className={ classes.cakeDetCon }>
                    <div>
                        <img src={cakes[id - 1].img} alt={cakes[id - 1].name} width="100%"/>
                    </div>

                    <div>
                        <h3>{cakes[id - 1].name}</h3>
                        <p>{cakes[id - 1].details}</p>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default CakeDetail;