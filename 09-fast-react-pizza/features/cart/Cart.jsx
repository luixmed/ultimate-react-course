import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import { CartStyled } from "./CartStyles";
import { getUsername } from "../users/userSlice";
import { getCart } from "./cartSlice";
import CartItem from "./CartItem";

function Cart() {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);

  return (
    <CartStyled>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2>Your cart, {username}</h2>

      <ul>
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

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
