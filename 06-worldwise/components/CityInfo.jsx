import { useParams } from "react-router-dom";
import { CityInfoStyled } from "./CityInfoStyles";
import { useEffect } from "react";
import { useCities } from "../contexts/CitiesContext";
import Spinner from "./Spinner";

function CityInfo() {
  const { cityId } = useParams();
  const { currentCity, getCity, isLoading } = useCities();

  useEffect(
    function () {
      getCity(cityId);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cityId]
  );

  // eslint-disable-next-line no-unused-vars
  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) return <Spinner />;

  return (
    <CityInfoStyled>
      <div>
        <h6>City Name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div>
        <h6>You went to {cityName} on</h6>
        <p>{date || null}</p>
      </div>

      {notes && (
        <div>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>
    </CityInfoStyled>
  );
}

export default CityInfo;
