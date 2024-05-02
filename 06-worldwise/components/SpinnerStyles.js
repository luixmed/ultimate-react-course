import styled from "styled-components";

export const SpinnerStyled = styled.div`
  /* Box */
  height: 100%;

  /* Layout */
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    /* Box */
    width: 6rem;
    height: 6rem;
    border-radius: 50%;

    /* Style */
    background: conic-gradient(#0000 10%, var(--color-light--2));
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 8px),
      #000 0
    );
    mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);

    /* Animation */
    animation: rotate 1.5s infinite linear;
  }

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
`;
