import Options from "./Options";
import { QuestionStyled } from "./QuestionStyles";

function Question({ currentQuestion, dispatch, answer }) {
  const { question, options, correctOption } = currentQuestion;

  return (
    <QuestionStyled>
      <h4>{question}</h4>
      <Options
        options={options}
        dispatch={dispatch}
        answer={answer}
        correctOption={correctOption}
      />
    </QuestionStyled>
  );
}

export default Question;
