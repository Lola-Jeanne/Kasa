import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Dropdowns from "../../components/Dropdowns/dropdown";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchData } from "../../components/FetchData/fetchData.js"
import '../Logement/logement.styles.scss'
import Carousel from "../../components/Carousel/carousel.jsx";
import Host from "../../components/Host/host.jsx";
import Rating from "../../components/Rating/rating.jsx";

function Logement() {

    const id = useParams('id').id;

    const Logements = useFetchData(`/datas.json`);

    const Logement = Logements.find((Logement) => Logement.id === id);

    const navigate = useNavigate(); 

    // Vérifier si l'id du logement est valide sinon redirection page erreur
    
    if(!Logement) {
        navigate('/error'); 
    }

    return (

        <div>
            <Header />
            <div className="logement-content">
                <div className="carousel-area">
                    <Carousel data={Logement?.pictures} />
                </div>
                <div className="info-area">
                    <div className="logement-title">{Logement?.title}</div>
                    <div className="logement-location">{Logement?.location}</div>
                    <Host data={Logement?.host} />
                </div>
                <div className="rating-tags">
                    <Rating data={Logement?.rating} />
                    <div className="tags-area">
                        {Logement?.tags.map((tag, idx) => (
                            <div className="tags-content">
                                <div className="tags" key={idx}>
                                    {tag}
                                </div>
                            </div>
                            )
                        )}
                    </div>
                </div>
                <div className="dropdownArea">
                    <Dropdowns buttonText="Description" content={<p className="text-content">{Logement?.description}</p>}/>
                    <Dropdowns buttonText="Équipements" content={<p className="text-content">
                        {Logement?.equipments.map((equipments, idx) => (
                            <li key={idx}>{equipments}</li>
                        ))}
                        </p>}/> 
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Logement;