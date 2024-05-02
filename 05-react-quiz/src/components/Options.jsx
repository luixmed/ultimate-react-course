import Option from "./Option";
import { OptionsStyled } from "./OptionsStyles";

function Options({ options, dispatch, answer, correctOption }) {
  return (
    <OptionsStyled>
      {options.map((option, index) => (
        <Option
          key={option}
          option={option}
          dispatch={dispatch}
          index={index}
          answer={answer}
          correctOption={correctOption}
        />
      ))}
    </OptionsStyled>
  );
}

export default Options;
