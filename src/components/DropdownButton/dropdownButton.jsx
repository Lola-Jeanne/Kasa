import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./dropdownButton.styles.scss";

export default function DropdownButton({ buttonText, open, toggle }){
    return<div onClick={toggle} className={`dropdown-btn ${open ? "button-open" : ""}`}>
            {buttonText}
            <span className="toggle-icon">
                {open ? <FaChevronDown /> : <FaChevronUp />}
            </span>
        </div>
}