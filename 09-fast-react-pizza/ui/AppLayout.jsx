import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import { AppLayoutStyled } from "./AppLayoutStyles";
import Header from "./Header";

function AppLayout() {
  return (
    <AppLayoutStyled>
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </AppLayoutStyled>
  );
}

export default AppLayout;
