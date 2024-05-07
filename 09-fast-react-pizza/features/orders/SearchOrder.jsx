import { useState } from "react";
import { SearchOrderStyled } from "./SearchOrderStyles";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [orderId, setOrderId] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!orderId) return;

    navigate(`/order/${orderId}`);
    setOrderId("");
  }

  return (
    <SearchOrderStyled onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your order ID..."
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
    </SearchOrderStyled>
  );
}

export default SearchOrder;
