import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Pricing from "../pages/Pricing";
import Product from "../pages/Product";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import AppLayout from "../pages/AppLayout";
import { GlobalStyles } from "./GlobalStyles";
import CitiesList from "../components/CitiesList";
import CountriesList from "../components/CountriesList";
import CityInfo from "../components/CityInfo";
import Form from "../components/Form";
import { CitiesProvider } from "../contexts/CitiesContext";

function App() {
  return (
    <CitiesProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index replace element={<Navigate to="cities" />} />
            <Route path="cities" element={<CitiesList />} />
            <Route path="cities/:cityId" element={<CityInfo />} />
            <Route path="countries" element={<CountriesList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
