import { useSelector } from "react-redux";
import { CustomerStyled } from "./CustomerStyles";

function Customer() {
  const customerName = useSelector((state) => state.customer.fullName);
  return <CustomerStyled>👋 Welcome {customerName}</CustomerStyled>;
}

export default Customer;
