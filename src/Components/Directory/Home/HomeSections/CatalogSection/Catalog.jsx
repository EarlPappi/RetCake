import { useAuth } from "../../../../../Context/AuthContext";
import Wrapper from "../../../../TinyComp/Wrapper"
import classes from "./Catalog.module.css";
import { Link } from "react-router-dom";


const CatalogSection = () => {

    const { cakes, addToCart } = useAuth();
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
                            <div key={cake.id} className={ classes.mapDiv }>
                                <div>
                                    <img src={cake.img} alt={cake.name} width="100%" />
                                </div>

                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}>
                                    <h3>{cake.name}</h3>
                                    <span>${cake.price}</span>

                                </div>

                                <div className={ classes.btnCon }>
                                    <Link to={`/cakes/${cake.id}`}>View</Link>
                                    <Link to="/" onClick={addToCart}>Add to Cart</Link>

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