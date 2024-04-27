import styled from "styled-components";

export const Div = styled.div`
  /* Box */
  border-radius: 11px;
  padding: 2.4rem 3.2rem;

  /* Style */
  background-color: #343a40;

  h2 {
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;

    margin-bottom: 0.8rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  p span:first-child {
    margin-right: 1rem;
  }
`;
