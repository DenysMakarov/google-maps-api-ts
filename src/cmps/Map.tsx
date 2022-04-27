import React, {useCallback, useMemo, useRef} from 'react';
import "./Map.css"
import {GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusterer} from "@react-google-maps/api"

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

function Map() {

    const mapRef = useRef<GoogleMap>()
    const center = useMemo<LatLngLiteral>(() => ({lat: 43, lng: -80}), [])
    const options = useMemo<MapOptions>(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        panControl: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        keyboardShortcuts: false,
        scrollwheel: true,
        disableDoubleClickZoom: true,
        fullscreenControl: false,
        // styles: defaultTheme
    }), [])
    const onLoad = useCallback((map: GoogleMap | undefined | any) => (mapRef.current = map), []);

    return (
        <div className="container">
            <div className="control">
                <h1>Commute</h1>
            </div>
            <div className="map">
                <GoogleMap
                    zoom={10}
                    center={center}
                    mapContainerClassName="map-container"
                    onLoad={onLoad}
                    options={options}
                >

                </GoogleMap>
            </div>
        </div>
    );
}

export default Map;


const defaultOptions = {
    strokeOpacity: 0.5,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
};
const closeOptions = {
    ...defaultOptions,
    zIndex: 3,
    fillOpacity: 0.05,
    strokeColor: "#8BC34A",
    fillColor: "#8BC34A",
};
const middleOptions = {
    ...defaultOptions,
    zIndex: 2,
    fillOpacity: 0.05,
    strokeColor: "#FBC02D",
    fillColor: "#FBC02D",
};
const farOptions = {
    ...defaultOptions,
    zIndex: 1,
    fillOpacity: 0.05,
    strokeColor: "#FF5252",
    fillColor: "#FF5252",
};



