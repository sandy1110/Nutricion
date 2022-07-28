import { CardProperty } from "./CardProperty"
import "./InvestProperties.css"
import { images } from '../helpers/CarouselData'
import SearchIcon from '@mui/icons-material/Search';
import { MapComponent } from "./MapComponent";
import { useState } from 'react'



export const InvestProperties = () => {

    const [mapLat, setMapLat] = useState(32.803963)
    const [mapLng, setMapLng] = useState(-117.130824)

    const datosPropiedades = images.map((property) => {
        return (
            <CardProperty
                key={property.id}
                propertyData={property}
                setMapLat={setMapLat}
                setMapLng={setMapLng}
            />)
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
                <MapComponent lat={mapLat} lng={mapLng} />
            </main>
            <div className="sidebar">
                {datosPropiedades}
            </div>
        </div>
    )
}
