import { WelcomeStyled } from "./WelcomeStyles";

function Welcome({ numberQuestions, dispatch }) {
  return (
    <WelcomeStyled>
      <h2>Welcome to The React Quiz</h2>
      <h3>{numberQuestions} questions to test your React mastery</h3>
      <button onClick={() => dispatch({ type: "start" })}>
        Let&apos;s start
      </button>
    </WelcomeStyled>
  );
}

export default Welcome;
