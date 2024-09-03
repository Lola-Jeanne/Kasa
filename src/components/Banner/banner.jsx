import "./banner.styles.scss";


export default function Banner({title, urlImage}){
    return<div className="containerBanner">
        <div className="banner">
            <img src={urlImage} className="imgBanner"></img>
            <p className="txtBanner">{title}</p>
        </div>
    </div>
}