import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

export const MapComponent = ({lat, lng}) => {
    const Google_Key = process.env.REACT_APP_GOOGLE_API_KEY
    const { isLoaded } = useLoadScript({ googleMapsApiKey: Google_Key })

    if (!isLoaded) return <div className='container'>Loading...</div>
    return (
        <GoogleMap
            zoom={15}
            center={{ lat: lat, lng: lng }}
            mapContainerClassName='container'
        >
            <Marker position={{lat: lat, lng: lng }}/>
        </GoogleMap>
    )

}
