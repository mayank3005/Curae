import { useEffect, useState } from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function MyMap() {
    const [coords, setCoords] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setCoords({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        }, (error) => console.log(error), {
            enableHighAccuracy: true,
            timeout: Infinity,
            maximumAge: 0
        });
    }, []);

    return (
        <GoogleMap
            defaultZoom={8}
            center={{ lat: coords.lat, lng: coords.lng }}
        />
    );
}

const MapWrapped = withScriptjs(withGoogleMap(MyMap));

export default function App() {
    return (
        <div style={{ height: "500px" }}>
            <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GMAP}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}
