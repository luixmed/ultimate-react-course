import Options from "./Options";
import { QuestionStyled } from "./QuestionStyles";

function Question({ currentQuestion }) {
  const { question, options } = currentQuestion;

  return (
    <QuestionStyled>
      <h4>{question}</h4>
      <Options options={options} />
    </QuestionStyled>
  );
}

export default Question;
