import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { CreateOrderStyled, FormStyled } from "./CreateOrderStyled";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import { fetchAddress, getUserState } from "../users/userSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../src/store";
import { useState } from "react";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const cart = useSelector(getCart);
  const formErrors = useActionData();

  const totalCartPrice = useSelector(getTotalCartPrice);
  const [withPriority, setWithPriority] = useState(false);
  const priorityPrice = withPriority ? 0.2 * totalCartPrice : 0;
  const finalPrice = totalCartPrice + priorityPrice;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const {
    username,
    status: addressStatus,
    position,
    address,
    error: addressError,
  } = useSelector(getUserState);

  const isLoadingAddress = addressStatus === "loading";
  const dispatch = useDispatch();

  function handleGetAddress(e) {
    e.preventDefault();
    dispatch(fetchAddress());
  }

  if (!cart.length) return <EmptyCart />;

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
            {formErrors?.phoneError && (
              <p className="error">{formErrors.phoneError}</p>
            )}
          </div>
        </div>

        {/* ADDRESS */}
        <div>
          <label>Address</label>
          <div>
            <input
              type="text"
              name="address"
              required
              disabled={isLoadingAddress}
              defaultValue={address}
            />
            {addressStatus === "error" && (
              <p className="error">{addressError}</p>
            )}
          </div>
          {!position.latitude && !position.longitude && (
            <span>
              <Button
                type="small"
                onClick={handleGetAddress}
                disabled={isLoadingAddress}
              >
                Get position
              </Button>
            </span>
          )}
        </div>

        {/* ORDER PRIORITY */}
        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.value)}
          />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        {/* CART and SUBMIT BUTTON */}
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting || isLoadingAddress}>
            {isSubmitting ? "Placing order..." : `Order now from ${finalPrice}`}
          </Button>
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
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phoneError =
      "Please give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect
  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
