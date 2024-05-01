import { Link } from "react-router-dom";
import { LogoStyled } from "./LogoStyles";

function Logo() {
  return (
    <Link to="/">
      <LogoStyled src="/logo.png" alt="WorldWise logo" />
    </Link>
  );
}

export default Logo;
