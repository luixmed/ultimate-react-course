import styled from "styled-components";

const TestStyled = styled.div`
  div {
    width: 10rem;
    height: 10rem;
    border: solid red;
    background-color: aqua;
  }
`;

function Test({ children }) {
  return (
    <TestStyled>
      <div>TEST</div>
      <div>TEST</div>
      {children}
    </TestStyled>
  );
}

export default Test;
