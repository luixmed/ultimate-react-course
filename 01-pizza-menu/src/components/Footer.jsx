import { FooterStyled } from "./FooterStyled";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <FooterStyled>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We&apos;re happy to welcome you between {openHour}:00 and {closeHour}
          :00
        </p>
      )}
    </FooterStyled>
  );
}

function Order({ closeHour }) {
  return (
    <div>
      <p>
        We&apos;re open until {closeHour}:00. Come visit us or order online.
      </p>
      <button>Order</button>
    </div>
  );
}

export default Footer;
