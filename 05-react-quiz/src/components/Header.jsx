import { HeaderStyled } from "./HeaderStyles";

function Header() {
  return (
    <HeaderStyled>
      <img src="logo512.png" alt="React logo" />
      <h1>The React Quiz</h1>
    </HeaderStyled>
  );
}

export default Header;
