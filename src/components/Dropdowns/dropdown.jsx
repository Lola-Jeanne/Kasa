import { useState } from "react"
import DropdownButton from "../DropdownButton/dropdownButton"
import DropdownContent from "../DropdownContent/dropdownContent"
import "./dropdown.styles.scss"

export default function Dropdowns({buttonText, content}) {
    
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(open => !open)
    }
    
    return<div className="dropdown">
            <DropdownButton toggle={toggleDropdown} open={open} buttonText={buttonText}/>
            <DropdownContent open={open} content={content}/>
        </div>
}