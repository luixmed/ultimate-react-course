import { useNavigate } from "react-router-dom";
import { MapStyled } from "./MapStyles";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { useGeoLocation } from "../hooks/useGeoLocation";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";

function Map() {
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);
  const { cities } = useCities();
  const {
    // eslint-disable-next-line no-unused-vars
    position: geoLocationPosition,
    isLoading: isLoadingGeoLocation,
    getPosition: getGeoLocationPosition,
  } = useGeoLocation();

  const [mapLat, mapLng] = useUrlPosition();

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geoLocationPosition)
        setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
    },
    [geoLocationPosition]
  );

  return (
    <MapStyled>
      <Button type="position" onClick={getGeoLocationPosition}>
        {isLoadingGeoLocation ? "Loading..." : "Use your position"}
      </Button>
      <MapContainer
        center={mapPosition}
        zoom={7}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/******** MARKERS ********/}
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        {/******** MAP VIEW FUNCTIONALITY ********/}
        <ChangeMapView position={mapPosition} />
        {/******** SELECT LOCATION ********/}
        <SelectLocationByClickingTheMap />
      </MapContainer>
    </MapStyled>
  );
}

function ChangeMapView({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function SelectLocationByClickingTheMap() {
  const navigate = useNavigate();

  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
