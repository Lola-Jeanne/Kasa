import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Dropdowns from "../../components/Dropdowns/dropdown";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../components/FetchData/fetchData.js"
import '../Logement/logement.styles.scss'
import Carousel from "../../components/Carousel/carousel.jsx";
import Host from "../../components/Host/host.jsx";

function Logement() {

    const id = useParams('id').id;

    const Logements = useFetchData(`/datas.json`);

    const Logement = Logements.find((Logement) => Logement.id === id);

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
                <div className="tags-area">
                    {Logement?.tags.map((tag) => (
                        <div className="tags-content">
                            <div className="tags">
                                {tag}
                            </div>
                        </div>
                        )
                    )}
                </div>
                <div className="dropdownArea">
                    <Dropdowns buttonText="Description" content={<p className="text-content">{Logement?.description}</p>}/> 
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Logement;