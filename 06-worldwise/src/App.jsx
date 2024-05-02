import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Pricing from "../pages/Pricing";
import Product from "../pages/Product";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import AppLayout from "../pages/AppLayout";
import { GlobalStyles } from "./GlobalStyles";
import CitiesList from "../components/CitiesList";

function App() {
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
            <Route index element={<CitiesList />} />
            <Route path="cities" element={<CitiesList />} />
            <Route path="countries" element={<p>COUNTRIES</p>} />
            <Route path="form" element={<p>FORM</p>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
