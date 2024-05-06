import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import { MenuStyled } from "./MenuStyled";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return <MenuStyled>MENU</MenuStyled>;
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
