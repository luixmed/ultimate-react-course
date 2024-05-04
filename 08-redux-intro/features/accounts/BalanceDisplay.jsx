import { useSelector } from "react-redux";
import { BalanceDisplayStyled } from "./BalanceDisplayStyles";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector((store) => store.account.balance);

  return <BalanceDisplayStyled>{formatCurrency(balance)}</BalanceDisplayStyled>;
}

export default BalanceDisplay;
