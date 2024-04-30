import { StartScreenStyled } from "./StartScreenStyles";

function StartScreen({ numberQuestions, dispatch }) {
  return (
    <StartScreenStyled>
      <h2>Welcome to The React Quiz</h2>
      <h3>{numberQuestions} questions to test your React mastery</h3>
      <button onClick={() => dispatch({ type: "start" })}>
        Let&apos;s start
      </button>
    </StartScreenStyled>
  );
}

export default StartScreen;
