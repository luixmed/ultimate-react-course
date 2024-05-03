import { useCities } from "../contexts/CitiesContext";
import { CitiesListStyled } from "./CitiesListStyle";
import City from "./City";
import Message from "./Message";
import Spinner from "./Spinner";

function CitiesList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <CitiesListStyled>
      {cities.map((city) => (
        <City key={city.id} city={city} />
      ))}
    </CitiesListStyled>
  );
}

export default CitiesList;
