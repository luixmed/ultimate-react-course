import styled from "styled-components";

export const CityStyled = styled.li`
  border-radius: 7px;

  a:link,
  a:visited {
    /* Font */
    color: inherit;

    /* Layout */
    display: flex;
    align-items: center;
    gap: 1.6rem;

    /* Box */
    padding: 1rem 2rem;
    border-radius: 7px;
    border-left: 5px solid var(--color-brand--2);
  }

  /* Styles */
  cursor: pointer;
  background-color: var(--color-dark--2);

  span {
    font-size: 2.6rem;
    /* line-height: 1; */
  }

  h3 {
    font-size: 1.7rem;
    font-weight: 600;
    margin-right: auto;
  }

  time {
    font-size: 1.5rem;
  }

  button {
    /* Box */
    height: 2rem;
    aspect-ratio: 1;
    border-radius: 50%;
    border: none;

    /* Font */
    color: var(--color-light--2);
    font-size: 1.6rem;
    font-weight: 400;

    /* Styles */
    cursor: pointer;
    background-color: var(--color-dark--1);

    /* Animation */
    transition: all 0.2s;
  }

  button:hover {
    color: var(--color-dark--1);
    background-color: var(--color-brand--1);
  }
`;
