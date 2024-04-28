import styled from "styled-components";

export const Div = styled.div`
  /* Layout */
  display: flex;
  align-items: center;
  gap: 1.6rem;

  div {
    display: flex;
  }

  p {
    color: ${(props) => props.color};
    font-size: ${(props) => `(${props.size} / 1.5)px`};
    line-height: 1;
    margin: 0;
  }

  ${(props) => props.class_}
`;
