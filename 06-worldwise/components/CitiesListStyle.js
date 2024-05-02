import styled from "styled-components";

export const CitiesListStyled = styled.ul`
  /* Box */
  width: 100%;
  height: 65vh;

  /* Layout */
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  /* Style */
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }
`;
