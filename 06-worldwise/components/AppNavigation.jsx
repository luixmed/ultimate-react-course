import { NavLink } from "react-router-dom";
import { AppNavigationStyled } from "./AppNavigationStyles";

function AppNavigation() {
  return (
    <AppNavigationStyled>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </AppNavigationStyled>
  );
}

export default AppNavigation;
