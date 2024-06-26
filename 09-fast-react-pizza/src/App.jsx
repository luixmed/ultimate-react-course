// import { AppStyled } from "./AppStyles";
import { GlobalStyles } from "./GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../ui/Home";
import Menu, { loader as menuLoader } from "../features/menu/Menu";
import Cart from "../features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "../features/orders/CreateOrder";
import Order, { loader as orderLoader } from "../features/orders/Order";
import AppLayout from "../ui/AppLayout";
import Error from "../ui/Error";
import { action as updateOrderAction } from "../features/orders/UpdateOrder";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
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
