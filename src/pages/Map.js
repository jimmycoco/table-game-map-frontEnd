import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '90vh',
};

const center = {
  lat: 25.0330, // 台北
  lng: 121.5654,
};

const markerPositions = [
  { lat: 25.0390, lng: 121.5684, info: "第一" },
  { lat: 25.0320, lng: 121.5674, info: "第二" },
  { lat: 25.0310, lng: 121.5644, info: "第三" },
  { lat: 25.0330, lng: 121.5684, info: "第四" },
  { lat: 25.0324, lng: 121.5694, info: "第五" },
  { lat: 25.0366, lng: 121.5675, info: "第六" },
];

const MyMapComponent = () => {
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    if (mapRef.current) {
      // 清除舊的標記
      
      markersRef.current.forEach((marker) => {
        marker.map = null;
      });
      markersRef.current = [];
  
      // 建立標記
      markerPositions.forEach((position, index) => {
        const marker = new window.google.maps.marker.AdvancedMarkerElement({
          map: mapRef.current,
          position: { lat: position.lat, lng: position.lng },
          title: position.info,
        });
  
        // 綁定點擊事件來顯示 info
        marker.addListener('gmp-click', () => {
          setSelectedMarker(position);
        });
  
        markersRef.current.push(marker); // 儲存標記
      });
    }
  }, []); 
  

  return (
    <LoadScript googleMapsApiKey="AIzaSyDw31RJycf8ubiNQfeUZY1lxwC86Qp06eQ">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={{ mapId: 'DEMO_MAP_ID' }} // 添加 mapId
        onLoad={(map) => {
          mapRef.current = map; // 儲存地圖實例
        }}
      >
        {/* 顯示標記訊息 */}
        {selectedMarker && (
          <div
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              padding: '5px',
              borderRadius: '5px',
              zIndex: 1,
              left: '10px', // 模擬定位
              top: '10px', // 模擬定位
            }}
          >
            <h4>{selectedMarker.info}</h4>
          </div>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;
