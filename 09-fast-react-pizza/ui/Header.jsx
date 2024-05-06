import { Link } from "react-router-dom";
import { HeaderStyled } from "./HeaderStyles";

function Header() {
  return (
    <HeaderStyled>
      <Link to="/">Fast React Pizza Co.</Link>
      <p>LUIS</p>
    </HeaderStyled>
  );
}

export default Header;
