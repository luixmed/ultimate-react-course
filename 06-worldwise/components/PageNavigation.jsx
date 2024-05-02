import { NavLink } from "react-router-dom";
import { PageNavigationStyled } from "./PageNavigationStyles";
import Logo from "./Logo";

function PageNavigation() {
  return (
    <PageNavigationStyled>
      <Logo />

      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className="ctaLink">
            Login
          </NavLink>
        </li>
      </ul>
    </PageNavigationStyled>
  );
}

export default PageNavigation;
