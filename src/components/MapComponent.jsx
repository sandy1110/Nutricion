import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

export const MapComponent = () => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: 'AIzaSyCgF_ZSrmQTmONbGUs5Y23EvRLuyJSC1JE' })

    if (!isLoaded) return <div>Loading...</div>
    return <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} mapContainerClassName='map-container' ></GoogleMap>

}

// function Mapa() {
//     return <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} ></GoogleMap>
// }
