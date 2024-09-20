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
            <div className="dropdownArea">
                <Dropdowns buttonText="Respect" content={<p className="text-content">La bienveillance fait partie des valeurs fondatrices Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}/> 
            </div>
            <div className="dropdownArea">
                <Dropdowns buttonText="Service" content={<p className="text-content">La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>}/> 
            </div>
            <div className="dropdownArea last-dropDown">
                <Dropdowns buttonText="Sécurité" content={<p className="text-content">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécruité domestique pour nos hôtes.</p>}/> 
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default About;