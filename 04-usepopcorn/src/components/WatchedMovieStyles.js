import styled from "styled-components";

export const Li = styled.li`
  /* Box */
  padding: 2.4rem 3.2rem;
  border-bottom: 1px solid #495057;

  /* Layout */
  display: grid;
  grid-template-columns: 6.4rem 1fr;
  align-items: center;
  column-gap: 1.6rem;

  position: relative;

  /* Style */
  cursor: pointer;
  &:hover {
    background-color: #343a40;
  }

  img {
    grid-row: 1 / 3;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1.8rem;

    button {
      /* Font */
      color: white;
      font-size: 1.2rem;

      /* Box */
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;
      margin-left: auto;

      /* Style */
      background-color: #f03e3e;
    }
  }

  p span:first-child {
    margin-right: 1rem;
  }
`;
