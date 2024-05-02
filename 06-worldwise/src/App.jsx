import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Pricing from "../pages/Pricing";
import Product from "../pages/Product";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import AppLayout from "../pages/AppLayout";
import { GlobalStyles } from "./GlobalStyles";
import CitiesList from "../components/CitiesList";
import { useEffect, useState } from "react";
import CountriesList from "../components/CountriesList";
import CityInfo from "../components/CityInfo";

const BASE_API_URL = "http://localhost:8000";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [cities, setCities] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_API_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.log(err);
        alert("There was an error fetching cities.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CitiesList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="cities"
              element={<CitiesList cities={cities} isLoading={isLoading} />}
            />
            <Route path="cities/:cityId" element={<CityInfo />} />
            <Route
              path="countries"
              element={<CountriesList cities={cities} isLoading={isLoading} />}
            />
            <Route path="form" element={<p>FORM</p>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
