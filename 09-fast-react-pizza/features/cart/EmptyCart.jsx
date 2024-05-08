import LinkButton from "../../ui/LinkButton";
import { EmptyCartStyled } from "./EmptyCartStyles";

function EmptyCart() {
  return (
    <EmptyCartStyled>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p>Your cart is still empty. Start adding some pizzas 😉</p>
    </EmptyCartStyled>
  );
}

export default EmptyCart;
