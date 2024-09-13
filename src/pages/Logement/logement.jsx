import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { useParams } from "react-router-dom";

function Logement() {

    const {id} = useParams();

    return (

        <div>
            <Header />
            <div>
                <div>{id}</div>
                <Footer />
            </div>
        </div>
    )
}

export default Logement;

// const currentApartment = Logements.filter(item => item.id === idLogement);