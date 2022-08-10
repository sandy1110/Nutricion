import { CardProperty } from "./CardProperty"
import "./InvestProperties.css"
import { images } from '../helpers/CarouselData'
import SearchIcon from '@mui/icons-material/Search';
import { MapComponent } from "./MapComponent";
import { useState } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";



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
        <div>
            <nav>
                <Paper elevation={7} sx={{display:"flex", flexDirection:"row", alignItems:"center", gridColumnGap:40, p: '4px 4px', my:4 }}>
                <Typography variant="h6" sx={{color: "#ffa500", px:10}}>WHERE DO YOU WANT TO INVEST?</Typography>
                <Paper elevation={1}
                    sx={{ display: 'flex', alignItems: 'center', width: "45%", pr:2}}
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
                </Paper>
            </nav>
        <div className="container">
            <main>
                <MapComponent lat={mapLat} lng={mapLng} />
            </main>  
            
            <div className="sidebar">
                {datosPropiedades}
            </div>
        </div>
        </div>
    )
}
