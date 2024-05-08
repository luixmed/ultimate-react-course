import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import { CartStyled } from "./CartStyles";

function Cart() {
  return (
    <CartStyled>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2>Your cart, USER_NAME</h2>
      <div>
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary">Clear cart</Button>
      </div>
    </CartStyled>
  );
}

export default Cart;
