import { OptionStyled } from "./OptionStyles";

function Option({ option, idx, answer, dispatch, correctOption }) {
  const hasAnswered = answer !== null;

  return (
    <OptionStyled>
      <button
        onClick={() => dispatch({ type: "newAnswer", payload: idx })}
        className={`${idx === answer ? "answer" : ""} ${
          hasAnswered ? (idx === correctOption ? "correct" : "wrong") : ""
        }`}
      >
        {option}
      </button>
    </OptionStyled>
  );
}

export default Option;
