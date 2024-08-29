import Header from "../Header/header";

function Error () {
    return (
        <div>
            <Header />
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="./pages/Home/index.jsx">Retourner sur la page d'acceuil</a>
        </div>
    )
}
export default Error; 