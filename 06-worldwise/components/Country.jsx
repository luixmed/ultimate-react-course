import { CountryStyled } from "./CountryStyles";

function Country({ country }) {
  return (
    <CountryStyled>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </CountryStyled>
  );
}

export default Country;
