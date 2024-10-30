import React, { useState } from 'react';
import {
    APIProvider,
    Map,
    AdvancedMarker,
} from '@vis.gl/react-google-maps';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const center = {
    lat: 25.0330, // 台北
    lng: 121.5654
};

const locations = [
    { key: 'first', location: { lat: 25.0390, lng: 121.5684 }, content: '第一個標點內容' },
    { key: 'second', location: { lat: 25.0320, lng: 121.5674 }, content: '第二個標點內容' },
    { key: 'third', location: { lat: 25.0310, lng: 121.5644 }, content: '第三個標點內容' },
    { key: 'forth', location: { lat: 25.0330, lng: 121.5684 }, content: '第四個標點內容' },
    { key: 'fifth', location: { lat: 25.0324, lng: 121.5694 }, content: '第五個標點內容' },
    { key: 'sixth', location: { lat: 25.0366, lng: 121.5675 }, content: '第六個標點內容' },
];

const MyMapComponent = () => {
    const [selectedPoi, setSelectedPoi] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleMarkerClick = (poi) => {
        setSelectedPoi(poi);
        setShowModal(true);
    };

    const handleClose = () => {
        setSelectedPoi(null);
        setShowModal(false);
    };

    return (
        <APIProvider apiKey={'AIzaSyCuMvaOKLkG-YenisELasoL7RvjXH8l7KM'} onLoad={() => console.log('Maps API has loaded.')}>
            <div id="map" style={{ height: '90vh', width: '100%', position: 'relative' }}>
                <Map
                    defaultZoom={15}
                    defaultCenter={center}
                    mapId='DEMO_MAP_ID'
                    onCameraChanged={(ev) =>
                        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
                    }>
                    <PoiMarkers pois={locations} onPoiClick={handleMarkerClick} />
                </Map>

                {/* Bootstrap Modal */}
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>標點資訊</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedPoi && <p>{selectedPoi.content}</p>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            關閉
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </APIProvider>
    );
};

const PoiMarkers = ({ pois, onPoiClick }) => {
    return (
        <>
            {pois.map((poi) => (
                <AdvancedMarker
                    key={poi.key}
                    position={poi.location}
                    onClick={() => onPoiClick(poi)}
                    clickable={true}
                />
            ))}
        </>
    );
};

export default MyMapComponent;