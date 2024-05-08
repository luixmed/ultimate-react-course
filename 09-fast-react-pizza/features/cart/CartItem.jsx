import { CartItemStyled } from "./CartItemStyles";
import DeleteItem from "./DeleteItem";

function CartItem({ item }) {
  // eslint-disable-next-line no-unused-vars
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <CartItemStyled>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{totalPrice}</p>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </CartItemStyled>
  );
}

export default CartItem;
