import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import { CartStyled } from "./CartStyles";

function Cart() {
  const username = useSelector((state) => state.user.username);

  return (
    <CartStyled>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2>Your cart, {username}</h2>
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
