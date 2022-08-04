import { CardProperty } from "./CardProperty"
import "./InvestProperties.css"
import { images } from '../helpers/CarouselData'
import SearchIcon from '@mui/icons-material/Search';
import { MapComponent } from "./MapComponent";
import { useState } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';



export const InvestProperties = () => {

    const [mapLat, setMapLat] = useState(32.803963)
    const [mapLng, setMapLng] = useState(-117.130824)
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    };
  

    const datosPropiedades = images.map((property) => {
        if(property.address.toLowerCase().includes(search.toLowerCase())){
            console.log(property.address)
            return (
                <CardProperty
                    key={property.id}
                    propertyData={property}
                    setMapLat={setMapLat}
                    setMapLng={setMapLng}
                />
            )
        }
    })
        
    return (
        <div className="container">
            <nav>
                <h2>Where do you want to invest?</h2>
                <Paper elevation={7}
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 325, my: 2}}
                    >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        value={search}
                        onChange={handleChange}
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton  sx={{ p: '10px',  color: '#ffa040'}} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
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
