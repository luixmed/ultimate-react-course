import { useSearchParams } from "react-router-dom";
import { MapStyled } from "./MapStyles";

function Map() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <MapStyled>
      <h1>MAP</h1>
      <p>
        lat: {lat}, lng: {lng}
      </p>
    </MapStyled>
  );
}

export default Map;
