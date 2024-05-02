import Options from "./Options";
import { QuestionStyled } from "./QuestionStyles";

function Question({ question, answer, dispatch }) {
  return (
    <QuestionStyled>
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </QuestionStyled>
  );
}

export default Question;
