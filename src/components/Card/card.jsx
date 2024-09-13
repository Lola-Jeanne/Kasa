import React from "react"
import '../Card/card.styles.scss'

function Card ({image, title}) {
    return (
        // retourner une carte avec image, titre et superposition
        <div className="card">
            <img className="card-Img" src={image} alt={title}/>            
            <p className="card-Title">{title}</p>       
        </div>
    )
}
  
  export default Card