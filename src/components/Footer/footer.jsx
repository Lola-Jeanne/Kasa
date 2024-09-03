import styles from "./footer.styles.scss";
import logoWhite from "../../assets/LOGO-white.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-regular-svg-icons';

export default function Footer(){
    return <footer className={styles.footer}>
            <div>
                <img src={logoWhite} alt="Logo du site Kasa en blanc"></img>
            </div>
            <div>
                <FontAwesomeIcon icon={faCopyright} style={{color: "#fcfcfc",}} />
                <p>2020 Kasa. All rights reserved</p>
            </div>
    </footer>
};