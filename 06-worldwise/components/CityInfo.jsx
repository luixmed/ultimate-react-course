import { useParams } from "react-router-dom";
import { CityInfoStyled } from "./CityInfoStyles";

function CityInfo() {
  const { cityId } = useParams();

  return <CityInfoStyled>City ID: {cityId}</CityInfoStyled>;
}

export default CityInfo;
