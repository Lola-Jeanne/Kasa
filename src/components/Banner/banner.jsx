import styles from "./banner.styles.scss";
// import bannerPicOne from "/Users/carlalopez/Documents/Openclassrooms/Projet 8/Workflow/kasa/src/assets/Banner-IMG-One.png";

export default function Banner({title, urlImage}){
    return<div className={styles.banner}>
        <div className="banner">
            <img src={urlImage} className="imgBanner"></img>
            <p className="txtBanner">{title}</p>
        </div>
    </div>
}