import { StartScreenStyled } from "./StartScreenStyles";

function StartScreen({ numberQuestions }) {
  return (
    <StartScreenStyled>
      <h2>Welcome to The React Quiz</h2>
      <h3>{numberQuestions} questions to test your React mastery</h3>
      <button>Let&apos;s start</button>
    </StartScreenStyled>
  );
}

export default StartScreen;
