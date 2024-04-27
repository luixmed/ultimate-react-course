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

  /* Animation */
  transition: all 0.4s;

  &:hover {
    background-color: #343a40;
  }

  img {
    grid-row: 1 / 3;
  }

  span:first-child {
    margin-right: 1rem;
  }
`;
