import { Form } from "react-router-dom";
import { CreateOrderStyled } from "./CreateOrderStyled";

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

export default CreateOrder;
