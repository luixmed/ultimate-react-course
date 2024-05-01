import { NextButtonStyled } from "./NextButtonStyles";

function NextButton({ dispatch, answer, index, numberQuestions }) {
  if (answer === null) return null;

  if (index < numberQuestions - 1)
    return (
      <NextButtonStyled onClick={() => dispatch({ type: "nextQuestion" })}>
        Next
      </NextButtonStyled>
    );

  if (index === numberQuestions - 1)
    return (
      <NextButtonStyled onClick={() => dispatch({ type: "finish" })}>
        Finish
      </NextButtonStyled>
    );
}

export default NextButton;
