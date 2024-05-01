import { NextButtonStyled } from "./NextButtonStyles";

function NextButton({ dispatch, answer }) {
  if (answer === null) return null;

  return (
    <NextButtonStyled onClick={() => dispatch({ type: "nextQuestion" })}>
      Next
    </NextButtonStyled>
  );
}

export default NextButton;
