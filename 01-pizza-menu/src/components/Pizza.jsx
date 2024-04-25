import { Li } from "./PizzaStyled";

function Pizza(props) {
  const { name, photoName, price, ingredients, soldOut } = props.pizzaObj;

  return (
    <Li soldout={soldOut}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </Li>
  );
}

export default Pizza;
