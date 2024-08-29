import Header from "../Header/header";
import Footer from "../Footer/footer";

function Error () {
    return (
        <div>
            <Header />
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="./pages/Home/index.jsx">Retourner sur la page d'acceuil</a>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default Error; 