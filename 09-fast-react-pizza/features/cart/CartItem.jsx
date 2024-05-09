import { useSelector } from "react-redux";
import { CartItemStyled } from "./CartItemStyles";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getItemQuantity } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const pizzaQuantity = useSelector(getItemQuantity(pizzaId));

  return (
    <CartItemStyled>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{totalPrice}</p>
        <UpdateItemQuantity pizzaId={pizzaId} pizzaQuantity={pizzaQuantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </CartItemStyled>
  );
}

export default CartItem;
