import Logo from "./Logo";
import { Nav } from "./NavBarStyles";

function NavBar({ children }) {
  return (
    <Nav>
      <Logo />
      {children}
    </Nav>
  );
}

export default NavBar;
