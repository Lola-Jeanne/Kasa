import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Dropdowns from "../../components/Dropdowns/dropdown";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../components/FetchData/fetchData.js"
import '../Logement/logement.styles.scss'
import Carousel from "../../components/Carousel/carousel.jsx";

function Logement() {

    const id = useParams('id').id;

    const Logements = useFetchData(`/datas.json`);

    const Logement = Logements.find((Logement) => Logement.id === id);

    // const pictures = useFetchData(`/datas.json`);

    return (

        <div>
            <Header />
            <div>
                <div>
                    <Carousel data={Logement?.pictures} />
                </div>
                <div className="logement-title">{Logement?.title}</div>
                <div className="logement-location">{Logement?.location}</div>
                <div>{Logement?.tags}</div>
                <div className="dropdownArea">
                <Dropdowns buttonText="Description" content={<p className="text-content">{Logement?.description}</p>}/> 
            </div>
                <Footer />
            </div>
        </div>
    )
}

export default Logement;