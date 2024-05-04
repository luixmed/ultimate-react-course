import CreateCustomer from "../features/customers/CreateCustomer";
import Customer from "../features/customers/Customer";
import { AppStyled } from "./AppStyles";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppStyled>
        <h1>🏦 The React-Redux Bank </h1>
        <CreateCustomer />
        <Customer />
      </AppStyled>
    </>
  );
}

export default App;
