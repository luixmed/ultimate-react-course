import { CartStyled } from "./CartStyles";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <CartStyled>
      <Link to="/">&larr; Back to menu</Link>
      <h2>Your cart, USER_NAME</h2>
    </CartStyled>
  );
}

export default Cart;
