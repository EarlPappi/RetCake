import { useAuth } from "../../../../../Context/AuthContext";
import Wrapper from "../../../../TinyComp/Wrapper"
import classes from "./Catalog.module.css";

const CatalogSection = () => {
    const { cakes } = useAuth();
    return (
        <div style={{
            padding: "2rem 0"
        }}>
            <h1 style={{
                textAlign: "center",
                marginBottom: "2rem",
                marginTop: "2rem",
            }}>Our Cakes</h1>

            <Wrapper>

                <div className={classes.catalogCakesCon}>
                    {cakes.map((cake) => {
                        return (
                            <div key={cake.id}>
                                <div>
                                    <img src={cake.img} alt={cake.name} width="100%" />
                                </div>

                                <div>
                                    <h3>{cake.name}</h3>
                                    <span>${cake.price}</span>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </Wrapper>
        </div>
    );
}

export default CatalogSection;