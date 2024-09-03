import stylesBanner from "./banner.styles.scss";


export default function Banner({title, urlImage}){
    return<div className={stylesBanner}>
        <div className="banner">
            <img src={urlImage} className="imgBanner"></img>
            <p className="txtBanner">{title}</p>
        </div>
    </div>
}