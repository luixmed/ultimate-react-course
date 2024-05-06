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
          {!soldOut ? <p>{unitPrice}</p> : <p>Sold out</p>}
          <button>Add to cart</button>
        </div>
      </div>
    </PizzaStyled>
  );
}

export default Pizza;
