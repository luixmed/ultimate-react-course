import { FooterStyled } from "./FooterStyles";

function Footer() {
  return (
    <FooterStyled>
      <p>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
    </FooterStyled>
  );
}

export default Footer;
