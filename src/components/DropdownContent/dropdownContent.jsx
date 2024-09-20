import "./dropdownContent.styles.scss"

export default function DropdownContent({content, open}){
    return<div className={`dropdown-content ${open ? "content-open" : "hide-content"}`}>{content}</div>
}