// import { AppStyled } from "./AppStyles";
import { GlobalStyles } from "./GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../ui/Home";
import Menu from "../features/menu/Menu";
import Cart from "../features/cart/Cart";
import CreateOrder from "../features/orders/CreateOrder";
import Order from "../features/orders/Order";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/cart", element: <Cart /> },
  { path: "/order/new", element: <CreateOrder /> },
  { path: "/order/:orderId", element: <Order /> },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
