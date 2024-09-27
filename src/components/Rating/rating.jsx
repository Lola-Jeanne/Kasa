import "./rating.styles.scss";
import { FaStar } from "react-icons/fa";

const defaultCount = 5; 
const defaultColor = '#E3E3E3'; 
const selectedColor = '#FF6060';

export default function Rating({ data }){
    const rating = data;

    return(
    <div className="stars-content">
        {/* Tableau des 5 éléments  */}
        {[...Array(defaultCount)].map((_, index) => (
            <FaStar key={index} color={index < rating ? selectedColor : defaultColor} className="star" />
            ))
        }
    </div>
    )
}

