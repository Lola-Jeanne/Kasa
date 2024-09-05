import styles from "/Users/carlalopez/Documents/Openclassrooms/Projet 8/Workflow/kasa/src/pages/Home/index.scss";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Banner from "../../components/Banner/banner";
import Cards from "../../components/Cards/cards";
import bannerPicOne from "../../assets/Banner-IMG-One.png";


function Home () {
    return (
        <div className={styles}>
            <Header />
            <div>
                <Banner title="Chez vous, partout et ailleurs" urlImage={bannerPicOne}/>
            </div>
            <div>
                <Cards />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default Home;