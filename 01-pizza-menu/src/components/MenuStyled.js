import styled from "styled-components";

export const Main = styled.main`
  text-align: center;
  margin-bottom: 6.4rem;

  h2 {
    /* Font */
    color: #333;
    font-size: 3.2rem;
    text-transform: uppercase;
    letter-spacing: 0.7px;

    /* Box */
    display: inline-block;
    padding-block: 0.8rem;
    border-block: 2px solid currentColor;
    margin-bottom: 4.8rem;
    span {
      margin-left: 1.6rem;
    }
  }

  p {
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.8;

    margin-bottom: 3.2rem;
  }

  ul {
    /* Layout */
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 6.4rem;
    row-gap: 4.8rem;
  }
`;
