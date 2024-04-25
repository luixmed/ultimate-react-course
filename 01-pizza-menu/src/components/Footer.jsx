import { FooterStyled } from "./FooterStyled";

function Footer() {
  return (
    <FooterStyled>
      <p>{new Date().toLocaleTimeString()} We&apos;re currently open!</p>
    </FooterStyled>
  );
}

export default Footer;
