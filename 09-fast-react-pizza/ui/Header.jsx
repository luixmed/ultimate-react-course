import { Link } from "react-router-dom";
import { HeaderStyled } from "./HeaderStyles";
import SearchOrder from "../features/orders/SearchOrder";
import Username from "../features/users/Username";

function Header() {
  return (
    <HeaderStyled>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <Username />
    </HeaderStyled>
  );
}

export default Header;
