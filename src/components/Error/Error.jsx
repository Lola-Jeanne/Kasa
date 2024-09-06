import styles from "./error.styles.scss";
import Header from "../Header/header";
import Footer from "../Footer/footer";

function Error () {
    return (
        <div className={styles.error}>
            <Header />
            <h1>404</h1>
            <p className="txtError">Oups! La page que vous demandez n'existe pas.</p>
            <a className="btnRetour" href="/">Retourner sur la page d'accueil</a>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default Error; 