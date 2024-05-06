import { Link } from "react-router-dom";
import { CartOverviewStyled } from "./CartOverviewStyles";

function CartOverview() {
  return (
    <CartOverviewStyled>
      <p>
        <span>4 pizzas</span>
        <span>$34.99</span>
      </p>
      <Link to="/cart">Open cart</Link>
    </CartOverviewStyled>
  );
}

export default CartOverview;
