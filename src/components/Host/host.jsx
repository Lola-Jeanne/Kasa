import "./host.styles.scss";

export default function Host({ data }) {
    return(
        <div className="host-content">
            <div className="host-name">
                {data?.name}
            </div>
            <img src={data?.picture} alt="portrait de l'hôte" className="host-picture"></img>
        </div>
    )
}