import { useEffect, useReducer } from "react";
import { AppStyled } from "./AppStyles";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

const SECONDS_PER_QUESTION = 20;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  totalPoints: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECONDS_PER_QUESTION,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    case "newAnswer": {
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        totalPoints:
          action.payload === question.correctOption
            ? state.totalPoints + question.points
            : state.totalPoints,
      };
    }
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.totalPoints > state.highscore
            ? state.totalPoints
            : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // eslint-disable-next-line no-unused-vars
  const {
    questions,
    status,
    index,
    answer,
    totalPoints,
    highscore,
    secondsRemaining,
  } = state;

  // ***** DERIVED STATE *****
  const numberQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(function () {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestions();
  }, []);

  return (
    <>
      <GlobalStyles />
      <AppStyled>
        <Header />
        <Main>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && (
            <StartScreen
              numberQuestions={numberQuestions}
              dispatch={dispatch}
            />
          )}
          {status === "active" && (
            <>
              <Progress
                numberQuestions={numberQuestions}
                answer={answer}
                index={index}
                totalPoints={totalPoints}
                maxPossiblePoints={maxPossiblePoints}
              />
              <Question
                currentQuestion={questions[index]}
                dispatch={dispatch}
                answer={answer}
              />
              <Footer>
                <Timer
                  secondsRemaining={secondsRemaining}
                  dispatch={dispatch}
                />
                <NextButton
                  dispatch={dispatch}
                  answer={answer}
                  index={index}
                  numberQuestions={numberQuestions}
                />
              </Footer>
            </>
          )}
          {status === "finished" && (
            <FinishScreen
              points={totalPoints}
              maxPossiblePoints={maxPossiblePoints}
              highscore={highscore}
              dispatch={dispatch}
            />
          )}
        </Main>
      </AppStyled>
    </>
  );
}

export default App;
