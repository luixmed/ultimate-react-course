import styled from "styled-components";

const Tag = styled.span`
  /* Font */
  color: var(--color-${(props) => props.type}-700);
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;

  /* Box */
  width: fit-content;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* Style */
  background-color: var(--color-${(props) => props.type}-100);
`;

export default Tag;
