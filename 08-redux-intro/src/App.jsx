import { useSelector } from "react-redux";
import CreateCustomer from "../features/customers/CreateCustomer";
import Customer from "../features/customers/Customer";
import { AppStyled } from "./AppStyles";
import { GlobalStyles } from "./GlobalStyles";

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
          </>
        )}
      </AppStyled>
    </>
  );
}

export default App;
