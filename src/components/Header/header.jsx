// import { Link, uselocation } from "react-router-dom";
import styles from "./header.styles.scss";
import logo from "/Users/carlalopez/Documents/Openclassrooms/Projet 8/Workflow/kasa/src/assets/LOGO.svg";

export default function Header(){
    // const location = uselocation();
    return <header className={styles.header}>
                <img src={logo} alt="Logo du site Kasa"></img>
                {/* <Link
                to="/"
                className={location.pathname === "/" ? styles.activeLink : ""}
            >
                Accueil
            </Link> */}
                <a href="/">Accueil</a>
                <a href="/about">A propos</a>
            </header>
};