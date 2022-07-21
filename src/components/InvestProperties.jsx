import { CardProperty } from "./CardProperty"
import "./InvestProperties.css"
import { images } from '../Helpers/CarouselData'
import SearchIcon from '@mui/icons-material/Search';
import { MapComponent } from "./MapComponent";



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
                <MapComponent/>
            </main>
            <div className="sidebar">
                {datosPropiedades}
            </div>
        </div>
    )
}
