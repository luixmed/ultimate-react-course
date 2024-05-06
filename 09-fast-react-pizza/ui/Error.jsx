import { useRouteError } from "react-router-dom";
import { ErrorStyled } from "./ErrorStyles";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <ErrorStyled>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.error.message}</p>
    </ErrorStyled>
  );
}

export default Error;
