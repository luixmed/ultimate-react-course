import { pizzaData } from "../data";
import { Main } from "./MenuStyled";
import Pizza from "./Pizza";

function Menu() {
  return (
    <Main>
      <h2>
        Our <span>menu</span>
      </h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul>
        {pizzaData.map((pizza, idx) => (
          <Pizza key={idx} pizzaObj={pizza} />
        ))}
      </ul>
    </Main>
  );
}

export default Menu;
