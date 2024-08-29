import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Banner from "../../components/Banner/banner";
import Cards from "../../components/Cards/cards";

function Home () {
    return (
        <div>
            <Header />
            {/* <div>
                <Banner />
            </div> */}
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