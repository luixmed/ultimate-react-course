import { Link } from "react-router-dom";
import { CityStyled } from "./CityStyles";

function City({ city }) {
  const { cityName, emoji, date, id } = city;

  return (
    <CityStyled>
      <Link to={id}>
        <span>{emoji}</span>
        <h3>{cityName}</h3>
        <time>{date}</time>
        <button>&times;</button>
      </Link>
    </CityStyled>
  );
}

export default City;
