import styled from "styled-components";

export const ProgressStyled = styled.header`
  /* Box */
  margin-bottom: 4rem;

  /* Layout */
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  gap: 1.2rem;

  /* Font */
  color: var(--color-medium);
  font-size: 1.8rem;

  progress {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 12px;
    grid-column: 1 / -1;
  }

  ::-webkit-progress-bar {
    background-color: var(--color-medium);
    border-radius: 100px;
  }
  ::-webkit-progress-value {
    background-color: var(--color-theme);
    border-radius: 100px;
  }
`;
