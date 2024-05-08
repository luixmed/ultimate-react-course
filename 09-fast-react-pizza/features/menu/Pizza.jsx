import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { PizzaStyled } from "./PizzaStyles";
import { addItem, getItemQuantity } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function Pizza({ pizza }) {
  const { id, name, unitPrice, imageUrl, ingredients, soldOut } = pizza;

  const dispatch = useDispatch();

  const pizzaQuantity = useSelector(getItemQuantity(id));
  const isPizzaInCart = pizzaQuantity > 0;

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
          {/* PRICE or SOLD OUT */}
          {!soldOut ? <p>{unitPrice}</p> : <p className="sold-out">Sold out</p>}

          {/* DELETE ITEM BUTTON */}
          {isPizzaInCart && (
            <div>
              <UpdateItemQuantity pizzaId={id} pizzaQuantity={pizzaQuantity} />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {/* ADD TO CART BUTTON */}
          {!soldOut && !isPizzaInCart && (
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
