import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Dropdowns from "../../components/Dropdowns/dropdown";
import Banner from "../../components/Banner/banner";
import bannerPicTwo from "/Users/carlalopez/Documents/Openclassrooms/Projet 8/Workflow/kasa/src/assets/Banner-img-two.png";

function About () {
    return (
        <div>
            <Header />
            <div>
                <Footer />
                <div>
                    <Banner urlImage={bannerPicTwo}/>
                </div>
                <div>
                    <Dropdowns /> 
                </div>
            </div>
        </div>
    )
}
export default About;