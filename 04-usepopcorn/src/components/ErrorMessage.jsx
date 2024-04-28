import styled from "styled-components";

const Error = styled.div`
  min-height: 80vh;

  display: grid;
  place-content: center;

  p {
    font-size: 4.4rem;
    text-align: center;
  }
`;

function ErrorMessage({ message }) {
  return (
    <Error>
      <p>
        <span>🚧⛔💥</span>
      </p>
      <p>{message}</p>
    </Error>
  );
}

export default ErrorMessage;
