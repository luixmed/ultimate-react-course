import styled from "styled-components";

export const HeaderStyled = styled.header`
  /* Layout */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Box */
  padding: 1.2rem 2.4rem;
  border-bottom: 1px solid #d6d3d1;

  /* Style */
  background-color: #facc15;

  a {
    color: inherit;
    text-transform: uppercase;
    letter-spacing: 1.6px;
    outline: none;
  }
`;
