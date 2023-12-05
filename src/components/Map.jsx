import React, { useContext } from 'react'
import { MapContainer, TileLayer, useMap,Marker,Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import { IpContext } from '../contexts/IpContext';
import { RecenterAutomatically } from '../hooks/useCenter';

export const Map = () => {
    
    const { location } = useContext(IpContext);

    return (

        <MapContainer center={[location?.lat, location?.lng]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location?.lat, location?.lng]}>
                <Popup>Location Spotted!</Popup>
            </Marker>

            <RecenterAutomatically lat={location?.lat} lng={location?.lng}/>

        </MapContainer>
    )
}
