import Button from "../../ui/Button";
import { PizzaStyled } from "./PizzaStyles";

function Pizza({ pizza }) {
  const { name, unitPrice, imageUrl, ingredients, soldOut } = pizza;

  return (
    <PizzaStyled>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{unitPrice}</p> : <p className="sold-out">Sold out</p>}
          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </PizzaStyled>
  );
}

export default Pizza;
