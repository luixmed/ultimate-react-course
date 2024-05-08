import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { UpdateItemQuantityStyled } from "./UpdateItemQuantityStyles";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, pizzaQuantity }) {
  const dispatch = useDispatch();

  return (
    <UpdateItemQuantityStyled>
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span>{pizzaQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </UpdateItemQuantityStyled>
  );
}

export default UpdateItemQuantity;
