import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import { MenuStyled } from "./MenuStyled";
import Pizza from "./Pizza";

function Menu() {
  const menu = useLoaderData();

  return (
    <MenuStyled>
      {menu.map((pizza) => (
        <Pizza key={pizza.id} pizza={pizza} />
      ))}
    </MenuStyled>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
