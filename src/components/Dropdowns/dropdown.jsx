import "./dropdown.styles.scss";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa-solid } from '@fortawesome/free-regular-svg-icons';
// import { a-chevron-up } from '@fortawesome/free-regular-svg-icons';

export default function Dropdowns(){
    const [isOpen, setIsOpen] = useState(false)

    const dropdownContent = () =>{
        setIsOpen(!isOpen);
    };

    return<div className="container">
        <div>
            <p className="txtBouton">Fiabilité</p>
            <button className="btnouvert" onClick={dropdownContent}>
                {isOpen ? 'Fermer' : 'Ouvrir'}
                {/* <FontAwesomeIcon icon={fa-solid fa-chevron-up} style={{color: "#ffffff",}} /> */}
            </button>
            {isOpen && (
                <div className="openContent">
                    <p>test contenu ouvert</p>
                </div>
            )}
        </div>
        <div>
            <p className="txtBouton">Respect</p>
            <button>test</button>
        </div>
        <div>
            <p className="txtBouton">Service</p>
            <button>test</button>
        </div>
        <div>
            <p className="txtBouton">Securité</p>
            <button>test</button>
        </div>
    </div>
}