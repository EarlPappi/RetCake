import AboutSection from "./HomeSections/AboutSection/AboutSection";
import CatalogSection from "./HomeSections/CatalogSection/Catalog";
import Hero from "./HomeSections/Hero/Hero";

const Home = () => {
    return (
        <div>
            <Hero/>
            <AboutSection/>
            <CatalogSection/>
        </div>

    );
}

export default Home;