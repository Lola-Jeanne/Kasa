import styles from "./cards.styles.scss";
import React from "react"
import { NavLink } from "react-router-dom"
/* Import du hook personnalisé useFetchData */
import { useFetchData } from "../FetchData/fetchData.js"
import Card from '../Card/card.jsx'

export default function Cards(){
    

    const Logements = useFetchData(`/datas.json`)
    
    //afficher une galerie avec tous les appartements provenant de la base de données JSON
    //pour chaque appartement rendre un article "cliquable"
    //se connecter au composant "fichelogement/id"
    //Le composant "Carte" est appelé avec 2 paramètres (une image et un titre)
    return (
        <div className="cardsArea">
        <div className="cardsContainer">
            {Logements.map((logement) => (
               
                    <article key={logement.id}>                        
                        <NavLink to={`/logement/${logement.id}`}>
                            <Card image={logement.cover} title={logement.title} />
                        </NavLink>
                    </article>                                            
                ))}
        </div>
        </div>
    );
};
