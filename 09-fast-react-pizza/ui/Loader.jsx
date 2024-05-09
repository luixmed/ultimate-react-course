import styled from "styled-components";

const LoaderStyled = styled.div`
  /* Layout */
  position: absolute;
  inset: 0;

  display: grid;
  place-content: center;

  /* Style */
  background-color: rgb(226 232 240 / 0.2);
  backdrop-filter: blur(4px);

  div.loader {
    /* Box */
    width: 45px;
    aspect-ratio: 0.75;

    --c: no-repeat linear-gradient(#292524 0 0);

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
  }
`;

function Loader() {
  return (
    <LoaderStyled>
      <div className="loader"></div>
    </LoaderStyled>
  );
}

export default Loader;
