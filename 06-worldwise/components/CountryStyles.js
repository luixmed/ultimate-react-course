import styled from "styled-components";

export const CountryStyled = styled.li`
  /* Layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  /* Font */
  font-size: 1.7rem;
  font-weight: 600;

  /* Box */
  padding: 1rem 2rem;
  border-radius: 7px;
  border-left: 5px solid var(--color-brand--1);

  /* Style */
  background-color: var(--color-dark--2);
`;
