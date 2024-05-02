import { FinishScreenStyled } from "./FinishStyle";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 100) emoji = "🤦‍♂️";

  return (
    <FinishScreenStyled>
      <p>
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({percentage}%)
      </p>
      <p>(Highscore: {highscore} points)</p>
      <button onClick={() => dispatch({ type: "restart" })}>Restart</button>
    </FinishScreenStyled>
  );
}

export default FinishScreen;
