import "./rating.styles.scss";
import { FaStar } from "react-icons/fa";

const defaultCount = 5; 

export default function Rating({ data }){
    const rating = data;

    return(
    <div className="stars-content">
        {/* Tableau des 5 éléments  */}
        {[...Array(defaultCount)].map((_, index) => (
            <FaStar key={index} className={`star ${index < rating ? 'selectedColor' : 'defaultColor'}`} />
        ))
        }
    </div>
    )
}