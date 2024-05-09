import { formatCurrency } from "../../utilities/helpers";
import { OrderItemStyled } from "./OrderItemStyles";

function OrderItem({ item, ingredients, isLoadingIngredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <OrderItemStyled>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <p>{isLoadingIngredients ? "Loading..." : ingredients.join(", ")}</p>
    </OrderItemStyled>
  );
}

export default OrderItem;
