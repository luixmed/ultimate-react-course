import styled from "styled-components";

export const Li = styled.li`
  /* Box */
  padding: 2.4rem 3.2rem;

  &:not(:last-child) {
    border-bottom: 1px solid #495057;
  }

  /* Layout */
  display: grid;
  grid-template-columns: 4.8rem 1fr;
  align-items: center;
  column-gap: 1.6rem;

  /* Style */
  &:hover {
    background-color: #343a40;
  }

  img {
    grid-row: 1 / 3;
  }

  div {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }

  p span:first-child {
    margin-right: 1rem;
  }
`;
