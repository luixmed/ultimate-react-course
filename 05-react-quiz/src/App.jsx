import { useEffect, useReducer } from "react";
import { AppStyled } from "./AppStyles";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  totalPoints: 0,
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
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // eslint-disable-next-line no-unused-vars
  const { questions, status, index, answer } = state;

  // ***** DERIVED STATE *****
  const numberQuestions = questions.length;

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
            <Question
              currentQuestion={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
          )}
        </Main>
      </AppStyled>
    </>
  );
}

export default App;
