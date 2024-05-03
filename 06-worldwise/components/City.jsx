import { Link } from "react-router-dom";
import { CityStyled } from "./CityStyles";
import { useCities } from "../contexts/CitiesContext";

function City({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const { currentCity } = useCities();

  return (
    <CityStyled active={id === currentCity.id}>
      <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <span>{emoji}</span>
        <h3>{cityName}</h3>
        <time>{date}</time>
        <button>&times;</button>
      </Link>
    </CityStyled>
  );
}

export default City;
