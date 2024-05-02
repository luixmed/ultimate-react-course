import { useNavigate, useSearchParams } from "react-router-dom";
import { MapStyled } from "./MapStyles";

function Map() {
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <MapStyled onClick={() => navigate("form")}>
      <h1>MAP</h1>
      <p>
        lat: {lat}, lng: {lng}
      </p>
    </MapStyled>
  );
}

export default Map;
