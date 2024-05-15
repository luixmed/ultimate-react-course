import styled from "styled-components";

const ButtonText = styled.button`
  /* Font */
  color: var(--color-brand-600);
  font-weight: 500;
  text-align: center;

  /* Box */
  border: none;
  border-radius: var(--border-radius-sm);

  /* Style */
  background: none;

  /* Aniamtion */
  transition: all 0.3s;

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }
`;

export default ButtonText;
