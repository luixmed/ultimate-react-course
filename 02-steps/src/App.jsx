import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { useState } from "react";

const DivStyled = styled.main`
  /* Font */
  text-align: center;

  /* Box */
  padding: 4.8rem;
  border-radius: 9px;

  /* Layout */
  display: flex;
  flex-direction: column;
  gap: 4rem;

  /* Style */
  background-color: #eee;

  div {
    width: 40rem;
    display: flex;
    justify-content: space-between;
  }

  span {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50rem;

    line-height: 3.2rem;

    background-color: #ddd;
  }

  span.active {
    color: white;
    background-color: #be4bdb;
  }

  p {
    font-size: 2.4rem;
  }

  button {
    /* Font */
    color: white;
    font-size: 1.6rem;

    /* Box */
    padding: 0.8rem 2.4rem;
    border-radius: 10rem;

    /* Style */
    background-color: #be4bdb;
  }
`;

const CloseBtn = styled.button`
  font-size: 1.8rem;

  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;

  position: absolute;
  top: 5rem;
  right: 5rem;

  background-color: #eee;
`;

const messages = [
  "Learn React",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((step) => step - 1);
  }

  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }

  return (
    <>
      <GlobalStyles />
      <CloseBtn
        className="close"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        x
      </CloseBtn>
      {isOpen && (
        <DivStyled>
          <div className="numbers">
            <span className={step >= 1 ? "active" : ""}>1</span>
            <span className={step >= 2 ? "active" : ""}>2</span>
            <span className={step >= 3 ? "active" : ""}>3</span>
          </div>

          <p>
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </DivStyled>
      )}
    </>
  );
}

export default App;
