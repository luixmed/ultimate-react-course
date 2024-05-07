import { Link } from "react-router-dom";
import { HeaderStyled } from "./HeaderStyles";
import SearchOrder from "../features/orders/SearchOrder";

function Header() {
  return (
    <HeaderStyled>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>LUIS</p>
    </HeaderStyled>
  );
}

export default Header;
