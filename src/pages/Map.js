import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

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
    const mapRef = useRef(null);
    const [selectedMarker, setSelectedMarker] = useState(null);

    useEffect(() => {
        if (mapRef.current && window.google) {
            const map = mapRef.current.state.map;
            console.log('Map loaded:', map); // 確認地圖實例是否存在

            markerPositions.forEach((position) => {
                const marker = new window.google.maps.marker.AdvancedMarkerElement({
                    map: map,
                    position: new window.google.maps.LatLng(position.lat, position.lng),
                    title: position.info || '標記點'
                });

                // 點擊事件處理
                marker.addListener('click', () => {
                    setSelectedMarker(position);
                });
            });
        }
    }, [mapRef]);

    return (
        <LoadScript googleMapsApiKey="AIzaSyDw31RJycf8ubiNQfeUZY1lxwC86Qp06eQ">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                onLoad={(map) => {
                    mapRef.current = { state: { map } }; // 儲存地圖實例
                }}
            >
                {selectedMarker && (
                    <div
                        style={{
                            position: 'absolute',
                            background: 'white',
                            padding: '10px',
                            borderRadius: '5px',
                            transform: `translate(${selectedMarker.lat}px, ${selectedMarker.lng}px)`
                        }}
                    >
                        <h4>標記資訊</h4>
                        <p>{selectedMarker.info}</p>
                        <p>緯度: {selectedMarker.lat}</p>
                        <p>經度: {selectedMarker.lng}</p>
                    </div>
                )}
            </GoogleMap>
        </LoadScript>
    );
}

export default MyMapComponent;
