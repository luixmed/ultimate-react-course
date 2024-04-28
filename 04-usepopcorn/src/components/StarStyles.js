import styled from "styled-components";

export const Span = styled.span`
  /* Box */
  display: block;
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};

  /* Style */
  cursor: pointer;

  svg.full {
    fill: ${(props) => props.color};
    stroke: ${(props) => props.color};
  }
  svg.empty {
    stroke: ${(props) => props.color};
  }
`;
