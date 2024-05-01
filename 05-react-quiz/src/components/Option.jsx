import { OptionStyled } from "./OptionStyles";

function Option({ option, dispatch, index, answer, correctOption }) {
  const hasAnswered = answer !== null;

  return (
    <OptionStyled>
      <button
        onClick={() => dispatch({ type: "newAnswer", payload: index })}
        className={`
        ${index === answer ? "answered" : ""} 
        ${hasAnswered ? (index === correctOption ? "correct" : "wrong") : ""}`}
        disabled={hasAnswered}
      >
        {option}
      </button>
    </OptionStyled>
  );
}

export default Option;
