import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { PizzaStyled } from "./PizzaStyles";
import { addItem } from "../cart/cartSlice";

function Pizza({ pizza }) {
  const { id, name, unitPrice, imageUrl, ingredients, soldOut } = pizza;

  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <PizzaStyled>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{unitPrice}</p> : <p className="sold-out">Sold out</p>}
          {!soldOut && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </PizzaStyled>
  );
}

export default Pizza;
