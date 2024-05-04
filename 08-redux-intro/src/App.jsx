import { useSelector } from "react-redux";
import CreateCustomer from "../features/customers/CreateCustomer";
import Customer from "../features/customers/Customer";
import { AppStyled } from "./AppStyles";
import { GlobalStyles } from "./GlobalStyles";
import AccountOperations from "../features/accounts/AccountOperations";
import BalanceDisplay from "../features/accounts/BalanceDisplay";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);

  return (
    <>
      <GlobalStyles />
      <AppStyled>
        <h1>🏦 The React-Redux Bank </h1>
        {!fullName ? (
          <CreateCustomer />
        ) : (
          <>
            <Customer />
            <AccountOperations />
            <BalanceDisplay />
          </>
        )}
      </AppStyled>
    </>
  );
}

export default App;
