import { pizzaData } from "../data";
import { Main } from "./MenuStyled";
import Pizza from "./Pizza";

function Menu() {
  const pizzas = pizzaData;

  return (
    <Main>
      <h2>
        Our <span>menu</span>
      </h2>

      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul>
            {pizzas.map((pizza, idx) => (
              <Pizza key={idx} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We&apos;re still working on our menu. Please come back later :)</p>
      )}
    </Main>
  );
}

export default Menu;
