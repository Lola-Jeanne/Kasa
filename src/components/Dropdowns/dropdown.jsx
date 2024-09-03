import "./dropdown.styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa-solid } from '@fortawesome/free-regular-svg-icons';
// import { a-chevron-up } from '@fortawesome/free-regular-svg-icons';

export default function Dropdowns(){
    return<div className="container">
        <div>
            <p className="txtBouton">Fiabilité</p>
            <btn>
            test
                {/* <FontAwesomeIcon icon={fa-solid fa-chevron-up} style={{color: "#ffffff",}} /> */}
            </btn>
        </div>
        <div>
            <p className="txtBouton">Respect</p>
            <btn>test</btn>
        </div>
        <div>
            <p className="txtBouton">Service</p>
            <btn>test</btn>
        </div>
        <div>
            <p className="txtBouton">Securité</p>
            <btn>test</btn>
        </div>
    </div>
}