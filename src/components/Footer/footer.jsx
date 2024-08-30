import styles from "./footer.styles.scss";
import logoWhite from "/Users/carlalopez/Documents/Openclassrooms/Projet 8/Workflow/kasa/src/assets/LOGO-white.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer(){
    return <footer className={styles.footer}>
            <div>
                <img src={logoWhite} alt="Logo du site Kasa en blanc"></img>
            </div>
            <div>
                <FontAwesomeIcon icon="fa-regular fa-copyright" style={{color: "#fcfcfc",}} />
                <p>2020 Kasa. All rights reserved</p>
            </div>
    </footer>
};