import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../components/FetchData/fetchData.js"

function Logement() {

    const id = useParams('id').id;

    const Logements = useFetchData(`/datas.json`);

    const Logement = Logements.find((l) => l.id === id);

    return (

        <div>
            <Header />
            <div>
            {Logements.map((logement) => (
               
               <article key={logement.id}>
                    {logement.title}                        
               </article>                                            
           ))}
                <div>{Logement}</div>
                <Footer />
            </div>
        </div>
    )
}

export default Logement;

// const currentApartment = Logements.filter(item => item.id === idLogement);