import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

export const MapComponent = () => {
    const Google_Key = process.env.REACT_APP_GOOGLE_API_KEY
    const { isLoaded } = useLoadScript({ googleMapsApiKey: Google_Key })

    if (!isLoaded) return <div className='container'>Loading...</div>
    return (
            <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} mapContainerClassName='container' ></GoogleMap>
    )

}
