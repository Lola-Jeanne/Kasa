import styles from "./banner.styles.scss";
import bannerPicOne from "/Users/carlalopez/Documents/Openclassrooms/Projet 8/Workflow/kasa/src/assets/Banner-IMG-One.png";

export default function Banner(){
    return<div className={styles.banner}>
        <img src={bannerPicOne} alt="Paysage mer"></img>
    </div>
}