import { Form, redirect } from "react-router-dom";
import { CreateOrderStyled } from "./CreateOrderStyled";
import { createOrder } from "../../services/apiRestaurant";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const cart = fakeCart;

  return (
    <CreateOrderStyled>
      <h2>Ready to order? Let&apos;s go!</h2>

      <Form method="POST">
        {/* USER'S NAME */}
        <div>
          <label>First name</label>
          <input type="text" name="customer" required />
        </div>

        {/* PHONE */}
        <div>
          <label>Phone number</label>
          <input type="tel" name="phone" required />
        </div>

        {/* ADDRESS */}
        <div>
          <label>Address</label>
          <input type="text" name="address" required />
        </div>

        {/* ORDER PRIORITY */}
        <div>
          <input type="checkbox" name="priority" id="priority" />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        {/* CART and SUBMIT BUTTON */}
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button>Order now</button>
        </div>
      </Form>
    </CreateOrderStyled>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
