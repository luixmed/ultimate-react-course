import { useEffect, useReducer } from "react";
import { AppStyled } from "./AppStyles";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";

const initialState = {
  questions: [],
  status: "loading",
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
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status } = state;

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
            <StartScreen numberQuestions={numberQuestions} />
          )}
        </Main>
      </AppStyled>
    </>
  );
}

export default App;
