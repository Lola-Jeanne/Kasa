import { NavLink } from "react-router-dom";
import styles from "./header.styles.scss";
import logo from "../../assets/LOGO.svg";

export default function Header(){
    return <header className={styles.header}>
                <img src={logo} alt="Logo du site Kasa"></img>
                <div>
                    <NavLink to="/" className={({ isActive, NavLink }) => isActive ? styles.activeLink : undefined}>
                    Accueil
                    </NavLink>
                    <NavLink to="/about" className={({ isActive, NavLink}) => isActive ? styles.activeLink : undefined}>
                    A Propos
                    </NavLink>
                </div>
            </header>
};