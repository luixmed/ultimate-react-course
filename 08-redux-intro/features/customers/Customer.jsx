import { useSelector } from "react-redux";
import { CustomerStyled } from "./CustomerStyles";

function Customer() {
  const customerName = useSelector((store) => store.customer.fullName);
  return <CustomerStyled>👋 Welcome {customerName}</CustomerStyled>;
}

export default Customer;
