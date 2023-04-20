import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

const MyMapComponent = () => {
  const [position, setPosition] = useState([29.956280, 76.816120]);
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const height = '500px';
  const width = '100%';
  const redMarker = new L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const blueMarker = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition([position.coords.latitude, position.coords.longitude]);
        fetchHospitals(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  const fetchHospitals = (latitude, longitude) => {
    const radius = 50000; // 50 km
    const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node[amenity=hospital](around:${radius},${latitude},${longitude});out;`;

    fetch(overpassUrl)
      .then(response => response.json())
      .then(data => setHospitals(data.elements))
      .catch(error => console.error(error));
  };

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // earth's radius in meters
    const lat1Rad = toRadians(lat1);
    const lat2Rad = toRadians(lat2);
    const latDiffRad = toRadians(lat2 - lat1);
    const lonDiffRad = toRadians(lon2 - lon1);
    const a = Math.sin(latDiffRad / 2) * Math.sin(latDiffRad / 2) +
      Math.cos(lat1Rad) * Math.cos(lat2Rad) *
      Math.sin(lonDiffRad / 2) * Math.sin(lonDiffRad / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };

  return (
    <>
      {loading ? <p>Map is loading...</p> : (
        <MapContainer center={position} zoom={12} style={{ height, width }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {hospitals.map(hospital => (
            <Marker key={hospital.id} position={[hospital.lat, hospital.lon]} icon={blueMarker}>
              <Popup>
                <div>
                  <h4>{hospital.tags.name}</h4>
                  <p>Distance: {(getDistance(position[0], position[1], hospital.lat, hospital.lon) / 1000).toFixed(2)} km</p>
                </div>
              </Popup>
            </Marker>
          ))}
          <Marker position={position} icon={redMarker}>
            <Popup>
              You are here!
            </Popup>
          </Marker>


        </MapContainer>
      )}
    </>
  );
};
export default MyMapComponent;
