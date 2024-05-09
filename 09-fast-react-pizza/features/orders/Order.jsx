import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { OrderStyled } from "./OrderStyles";

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
    // cart,
  } = order;

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
        <p>Order should have arrived</p>
        <p>(Estimated delivery: {estimatedDelivery})</p>
      </div>

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
