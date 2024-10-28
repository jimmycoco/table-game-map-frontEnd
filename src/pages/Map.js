import React, { useState } from 'react';
import { GoogleMap, LoadScript, InfoWindow, MarkerF } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '90vh'
};

const center = {
    lat: 25.0330, // 台北
    lng: 121.5654
};

const markerPositions = [
    { lat: 25.0390, lng: 121.5684, info: "第一" },
    { lat: 25.0320, lng: 121.5674, info: "第二" },
    { lat: 25.0310, lng: 121.5644, info: "第三" },
    { lat: 25.0330, lng: 121.5684, info: "第四" },
    { lat: 25.0324, lng: 121.5694, info: "第五" },
    { lat: 25.0366, lng: 121.5675, info: "第六" }
];

function MyMapComponent() {
    const [selectedMarker, setSelectedMarker] = useState(null);

    return (
        <LoadScript googleMapsApiKey="AIzaSyDw31RJycf8ubiNQfeUZY1lxwC86Qp06eQ">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
            >
                <MarkerF position={center} />
                {markerPositions.map((position, index) => (
                    <MarkerF
                        key={index}
                        position={position}
                        onClick={() => setSelectedMarker(position)}
                    />
                ))}
                {selectedMarker && (
                    <InfoWindow
                        position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                        onCloseClick={() => setSelectedMarker(null)}
                    >
                        <div>
                            <h4>標記資訊</h4>
                            <p>{selectedMarker.info}</p>
                            <p>緯度: {selectedMarker.lat}</p>
                            <p>經度: {selectedMarker.lng}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    );
}

export default MyMapComponent;
