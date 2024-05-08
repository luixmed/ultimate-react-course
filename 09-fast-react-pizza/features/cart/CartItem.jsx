import { CartItemStyled } from "./CartItemStyles";

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
      </div>
    </CartItemStyled>
  );
}

export default CartItem;
