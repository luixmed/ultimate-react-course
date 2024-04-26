import styled from "styled-components";

export const Div = styled.div`
  /* Box */
  padding: 4rem 3.2rem;

  /* Layout */
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* Style */
  background-color: #6f4e37;

  ul {
    display: flex;
    gap: 9.6rem;
    flex-wrap: wrap;
  }

  div {
    margin-top: auto;

    display: flex;
    align-items: center;
    gap: 3.2rem;
  }
`;
