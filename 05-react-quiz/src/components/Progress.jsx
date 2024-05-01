import { ProgressStyled } from "./ProgressStyles";

function Progress({
  numberQuestions,
  index,
  answer,
  totalPoints,
  maxPossiblePoints,
}) {
  return (
    <ProgressStyled>
      <progress max={numberQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <span>{index + 1}</span> / {numberQuestions}
      </p>
      <p>
        Points <span>{totalPoints}</span> / {maxPossiblePoints}
      </p>
    </ProgressStyled>
  );
}

export default Progress;
