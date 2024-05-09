import { formatCurrency } from "../../utilities/helpers";
import { OrderItemStyled } from "./OrderItemStyles";

function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;

  return (
    <OrderItemStyled>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </OrderItemStyled>
  );
}

export default OrderItem;
