import AboutSection from "./HomeSections/AboutSection/AboutSection";
import CatalogSection from "./HomeSections/CatalogSection/Catalog";
import Footer from "./HomeSections/Footer/Footer";
import Hero from "./HomeSections/Hero/Hero";

const Home = () => {
    return (
        <div>
            <Hero/>
            <AboutSection/>
            <CatalogSection/>
            <Footer/>
        </div>

    );
}

export default Home;