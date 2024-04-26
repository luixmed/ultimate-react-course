import styled from "styled-components";

export const FormStyled = styled.form`
  /* Font */
  color: #333;
  text-align: center;

  /* Block */
  padding: 2.4rem 3.2rem;

  /* Layout */
  display: flex;
  align-items: center;
  gap: 3.2rem;

  /* Style */
  background-color: #fd7e14;

  select,
  input,
  button {
    padding: 1.2rem 2.4rem;
    border-radius: 10rem;
    background-color: #ffe8cc;
  }

  button {
    color: #555;
    font-weight: 700;
    text-transform: uppercase;
    padding: 1.2rem 2.4rem;
    background-color: #63e6be;
  }
`;
