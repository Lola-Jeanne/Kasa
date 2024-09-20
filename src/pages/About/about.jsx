import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Dropdowns from "../../components/Dropdowns/dropdown";
import Banner from "../../components/Banner/banner";
import bannerPicTwo from "../../assets/Banner-img-two.png";
import '../About/about.styles.scss'

function About () {
    return (
        <div>
            <Header />
            <div>
                <Banner urlImage={bannerPicTwo}/>
            </div>
            <div className="dropdownArea">
                <Dropdowns buttonText="Fiabilité" content={<p className="text-content">Les annonces postée sur Kasa garantissent une fiabilité totale. Les photos sont conforment aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>}/> 
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default About;