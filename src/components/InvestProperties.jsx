import { CardProperty } from "./CardProperty"
import { Carousel } from "./Carousel"
import "./InvestProperties.css"
import { images } from '../Helpers/CarouselData'


export const InvestProperties = () => {
    // const { title, subtitle, img, id, value, area, capRate, address } = images;

    const datosPropiedades  = images.map((property) => {
        // return (<h1>{property.id}</h1>)
        return(<CardProperty key={property.id} propertyData={property}/>)
    })

    return (
        // <Carousel/>
        <div className="container">
            <nav>NavBar</nav>
            <main>Main</main>
            <div className="sidebar">
                {datosPropiedades}
            </div>
            <footer>Footer</footer>
        </div>
    )
}
