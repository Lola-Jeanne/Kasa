import '../Carousel/carousel.styles.scss'

export default function Carousel({ data }){

    return (
    <div>{data.map(( item, id) => {
        return <img src={item.src} key={id}/>
    })}</div>
        
    );
};