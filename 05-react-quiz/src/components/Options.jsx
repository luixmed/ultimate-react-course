import Option from "./Option";
import { OptionsStyled } from "./OptionsStyles";

function Options({ question, answer, dispatch }) {
  return (
    <OptionsStyled>
      {question.options.map((option, idx) => (
        <Option
          key={option}
          option={option}
          idx={idx}
          correctOption={question.correctOption}
          answer={answer}
          dispatch={dispatch}
        />
      ))}
    </OptionsStyled>
  );
}

export default Options;
