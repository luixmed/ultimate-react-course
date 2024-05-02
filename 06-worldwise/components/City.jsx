import { CityStyled } from "./CityStyles";

function City({ city }) {
  const { cityName, emoji, date } = city;

  return (
    <CityStyled>
      <span>{emoji}</span>
      <h3>{cityName}</h3>
      <div>{date}</div>
      <button>&times;</button>
    </CityStyled>
  );
}

export default City;
