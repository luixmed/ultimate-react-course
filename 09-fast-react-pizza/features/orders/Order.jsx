import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { OrderStyled } from "./OrderStyles";
import { calcMinutesLeft, formatDate } from "../../utilities/helpers";
import OrderItem from "./OrderItem";

// Test ID: IIDSAT

function Order() {
  const order = useLoaderData();

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <OrderStyled>
      <div>
        <h2>Order #{id} status</h2>
        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😀`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul>
        {cart.map((item) => (
          <OrderItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div>
        <p>Price pizza: {orderPrice}</p>
        {priority && <p>Price priority: {priorityPrice}</p>}
        <p>To pay on delivery: {orderPrice + priorityPrice}</p>
      </div>
    </OrderStyled>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
