import { Link } from "react-router-dom";
import { CartOverviewStyled } from "./CartOverviewStyles";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <CartOverviewStyled>
      <p>
        <span>{totalCartQuantity} pizzas</span>
        <span>{totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </CartOverviewStyled>
  );
}

export default CartOverview;
