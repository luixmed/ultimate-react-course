import styled from "styled-components";

const LoaderStyled = styled.div`
  /* Box */
  width: 45px;
  aspect-ratio: 0.75;

  --c: no-repeat linear-gradient(brown 0 0);

  /* Styles */
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  background-size: 20% 50%;

  /* Animation */
  animation: loading 1s infinite linear;

  @keyframes loading {
    20% {
      background-position: 0% 0%, 50% 50%, 100% 50%;
    }
    40% {
      background-position: 0% 100%, 50% 0%, 100% 50%;
    }
    60% {
      background-position: 0% 50%, 50% 100%, 100% 0%;
    }
    80% {
      background-position: 0% 50%, 50% 50%, 100% 100%;
    }
  }
`;

function Loader() {
  return <LoaderStyled></LoaderStyled>;
}

export default Loader;
