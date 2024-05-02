import { Link } from "react-router-dom";
import { CityStyled } from "./CityStyles";

function City({ city }) {
  const { cityName, emoji, date, id, position } = city;

  return (
    <CityStyled>
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
