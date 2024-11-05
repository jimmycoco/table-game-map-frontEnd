import React, { useState, useEffect } from 'react';
import {
    APIProvider,
    Map,
    AdvancedMarker,
} from '@vis.gl/react-google-maps';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import api from '../api/api';

const center = {
    lat: 25.040610346451604,
    lng: 121.49693286006418,
};

// const locations = [
//     { key: 'first', location: { lat: 25.0390, lng: 121.5684 }, content: '第一個標點內容' },
//     { key: 'second', location: { lat: 25.0320, lng: 121.5674 }, content: '第二個標點內容' },
//     { key: 'third', location: { lat: 25.0310, lng: 121.5644 }, content: '第三個標點內容' },
//     { key: 'forth', location: { lat: 25.0330, lng: 121.5684 }, content: '第四個標點內容' },
//     { key: 'fifth', location: { lat: 25.0324, lng: 121.5694 }, content: '第五個標點內容' },
//     { key: 'sixth', location: { lat: 25.0366, lng: 121.5675 }, content: '第六個標點內容' },
// ];

const MyMapComponent = () => {
    const [locations, setLocations] = useState([]);
    const [selectedPoi, setSelectedPoi] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // 非同步函式來取得地圖資料
        const fetchMapPoints = async () => {
            try {
                const response = await api.get('/point/getPointsForMap'); // 假設後端路由為 /points/map
                const dataForMap = response.data.dataForMap; // 從回傳資料中獲取地圖資料
                const formattedLocations = dataForMap.map((point, index) => ({
                    key: `poi-${index}`,   // 使用唯一鍵值
                    location: point.storePosition[0], // 位置資料
                    content: point.store, // 店家名稱作為標點內容
                }));
                setLocations(formattedLocations); // 將格式化的資料設置到狀態中
            } catch (error) {
                console.error("無法取得地圖資料:", error.response?.data || error.message);
            }
        };

        fetchMapPoints();
    }, []);

    const handleMarkerClick = async (poi) => {
        try {
            const response = await api.get(`/point/getPointDetails`, {
                params: {
                    storePosition: `${poi.location.lng},${poi.location.lat}`
                }
            });
            setSelectedPoi(response.data.dataDetails);
            //console.log(response.data.dataDetails);
            setShowModal(true);
        } catch (error) {
            console.error('無法取得標點詳細資料:', error);
        }
    };

    const handleClose = () => {
        setSelectedPoi(null);
        setShowModal(false);
    };

    return (
        <APIProvider apiKey={'AIzaSyCuMvaOKLkG-YenisELasoL7RvjXH8l7KM'} onLoad={() => console.log('Maps API has loaded.')}>
            <div id="map" style={{ height: '90vh', width: '100%', position: 'relative' }}>
                <Map
                    defaultZoom={14}
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
                        <Modal.Title>{selectedPoi && <h2>{selectedPoi.store}</h2>}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedPoi ? (
                            <>
                                <h3>店家資訊:</h3>
                                <p>地址: {selectedPoi.storeAddress}</p>
                                <p>計費方式: {selectedPoi.money === 'daytime' ? '以次計費' : '以時計費'}</p>
                                <p>是否需要預約: {selectedPoi.vip === 'yesvip' ? '是' : '否'}</p>
                                <p>是否需要訂金: {selectedPoi.deposit === 'yesdeposit' ? '是' : '否'}</p>
                                <p>是否有員工: {selectedPoi.staff === 'yesstaff' ? '是' : '否'}</p>
                                <p>現場是否有桌遊可以已購買: {selectedPoi.buyGame === 'yesbuyGame' ? '是' : '否'}</p>
                                <p>有無包廂: {selectedPoi.vipRoom === 'yesvipRoom' ? '是' : '否'}</p>
                                <p>現場是否提供餐點: {selectedPoi.infood === 'yesinfood' ? '是' : '否'}</p>
                                <p>可否攜帶外食: {selectedPoi.outFood === 'yesoutFood' ? '是' : '否'}</p>
                                <p>營業時間:</p>
                                <ul>
                                    <li>星期一:{selectedPoi.hours[0].monday}</li>
                                    <li>星期二:{selectedPoi.hours[0].tuesday}</li>
                                    <li>星期三:{selectedPoi.hours[0].wednesday}</li>
                                    <li>星期四:{selectedPoi.hours[0].thursday}</li>
                                    <li>星期五:{selectedPoi.hours[0].friday}</li>
                                    <li>星期六:{selectedPoi.hours[0].saturday}</li>
                                    <li>星期日:{selectedPoi.hours[0].sunday}</li>

                                </ul>
                            </>
                        ) : (
                            <p>載入中...</p>
                        )}
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