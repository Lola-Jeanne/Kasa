import { NavLink } from "react-router-dom";
import "./header.styles.scss";
import logo from "../../assets/LOGO.svg";

export default function Header(){
    return <header>
                <img src={logo} alt="Logo du site Kasa"></img>
                <div>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'activeLink' : ''}
                    end
                    >
                    Accueil
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'activeLink' : ''}>
                    A Propos
                    </NavLink>
                </div>
            </header>
};