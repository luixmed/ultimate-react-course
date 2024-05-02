import styled from "styled-components";

export const LoaderStyled = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

<<<<<<< HEAD
  /* Font */
  color: var(--color-medium);
  font-size: 1.6rem;

  /* Box */
  width: fit-content;
  margin-inline: auto;
  padding: 2.4rem 8rem;
  border-radius: 10rem;
  margin-top: 4rem;

  /* Style */
  background-color: #495057;
=======
  /* Box */
  margin-top: 4rem;

  /* Font */
  color: var(--color-medium);
  font-size: 1.4rem;
>>>>>>> origin/main

  div {
    width: 50px;
    height: 24px;
    background: radial-gradient(circle closest-side, currentColor 90%, #0000) 0%
        50%,
      radial-gradient(circle closest-side, currentColor 90%, #0000) 50% 50%,
      radial-gradient(circle closest-side, currentColor 90%, #0000) 100% 50%;
    background-size: calc(100% / 3) 12px;
    background-repeat: no-repeat;
    animation: loader 1s infinite linear;
<<<<<<< HEAD

    @keyframes loader {
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
=======
  }

  @keyframes loader {
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
>>>>>>> origin/main
    }
  }
`;
