import { Form, redirect, useActionData } from "react-router-dom";
import { CreateOrderStyled, FormStyled } from "./CreateOrderStyled";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

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
  const FormErrors = useActionData();

  const username = useSelector((state) => state.user.username);

  return (
    <CreateOrderStyled>
      <h2>Ready to order? Let&apos;s go!</h2>

      <FormStyled method="POST" as={Form}>
        {/* USER'S NAME */}
        <div>
          <label>First name</label>
          <input type="text" name="customer" required defaultValue={username} />
        </div>

        {/* PHONE */}
        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
            {FormErrors?.phoneError && <p>{FormErrors.phoneError}</p>}
          </div>
        </div>

        {/* ADDRESS */}
        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
          <span>
            <Button type="small">Get position</Button>
          </span>
        </div>

        {/* ORDER PRIORITY */}
        <div>
          <input type="checkbox" name="priority" id="priority" />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        {/* CART and SUBMIT BUTTON */}
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary">Order now</Button>
        </div>
      </FormStyled>
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

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phoneError =
      "Please give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect
  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
