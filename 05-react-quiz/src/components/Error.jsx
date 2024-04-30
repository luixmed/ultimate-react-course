import { ErrorStyled } from "./ErrorStyles";

function Error() {
  return (
    <ErrorStyled>
      <span>💥</span> There was an error fetching questions.
    </ErrorStyled>
  );
}

export default Error;
