import { OrderStyled } from "./OrderStyles";

const order = {
  id: "ABCDEF",
  customer: "Jonas",
  phone: "123456789",
  address: "Arroios, Lisbon , Portugal",
  priority: true,
  estimatedDelivery: "2027-04-25T10:00:00",
  cart: [
    {
      pizzaId: 7,
      name: "Napoli",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: "Diavola",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: "Romana",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: "-9.000,38.000",
  orderPrice: 95,
  priorityPrice: 19,
};

function Order() {
  const {
    // id,
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
        <h2>Status</h2>
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

export default Order;
