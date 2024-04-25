import { Li } from "./PizzaStyled";

function Pizza({ pizzaObj }) {
  const { name, photoName, price, ingredients, soldOut } = pizzaObj;

  return (
    <Li soldout={soldOut}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </Li>
  );
}

export default Pizza;
