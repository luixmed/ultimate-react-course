import { NavLink } from "react-router-dom";
import { PageNavigationStyled } from "./PageNavigationStyles";

function PageNavigation() {
  return (
    <PageNavigationStyled>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/product">Product</NavLink>
      </li>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
    </PageNavigationStyled>
  );
}

export default PageNavigation;
