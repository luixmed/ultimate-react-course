import { useCities } from "../contexts/CitiesContext";
import { CountriesListStyled } from "./CountriesListStyles";
import Country from "./Country";
import Message from "./Message";
import Spinner from "./Spinner";

function CountriesList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((countryArray, city) => {
    if (!countryArray.map((obj) => obj.country).includes(city.country))
      return [...countryArray, { country: city.country, emoji: city.emoji }];
    else return countryArray;
  }, []);

  return (
    <CountriesListStyled>
      {countries.map((country) => (
        <Country country={country} key={country.country} />
      ))}
    </CountriesListStyled>
  );
}

export default CountriesList;
