// src/Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '90vh'
};

const center = {
    lat: 25.0330, // 台北
    lng: 121.5654
};

function MyMapComponent() {
    return (
        <LoadScript googleMapsApiKey="AIzaSyDw31RJycf8ubiNQfeUZY1lxwC86Qp06eQ">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
}

export default MyMapComponent;
