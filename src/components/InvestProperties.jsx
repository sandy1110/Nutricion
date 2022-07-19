import { CardProperty } from "./CardProperty"
import "./InvestProperties.css"
import { images } from '../Helpers/CarouselData'
import SearchIcon from '@mui/icons-material/Search';
import { MapComponent } from "./MapComponent";
import MapImage from '../Assets/MockMap.png'



export const InvestProperties = () => {

    const datosPropiedades = images.map((property) => {
        return (<CardProperty key={property.id} propertyData={property} />)
    })

    return (
        <div className="container">
            <nav>
                <h2>where do you want to invest?</h2>
                <div className="searchBar">
                    <input />
                    <SearchIcon />
                </div>
            </nav>
            <main>
                {/* have to add map here for next release,   it is hardcoded */}
                <img className="mapImage" src={MapImage} />
            </main>
            <div className="sidebar">
                {datosPropiedades}
            </div>
            <footer></footer>
        </div>
    )
}
