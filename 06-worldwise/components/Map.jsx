import { useNavigate, useSearchParams } from "react-router-dom";
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

function Map() {
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);
  const { cities } = useCities();

  const [searchParams] = useSearchParams();

  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  return (
    <MapStyled>
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
    click: () => navigate("form"),
  });
}

export default Map;
