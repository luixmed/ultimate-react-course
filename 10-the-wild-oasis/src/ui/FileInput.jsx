import styled from "styled-components";

const FileInput = styled.input`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    /* Font */
    color: var(--color-brand-50);
    font: inherit;
    font-weight: 500;

    /* Box */
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: var(--border-radius-sm);
    margin-right: 1.2rem;

    /* Style */
    cursor: pointer;
    background-color: var(--color-brand-600);

    /* Animation */
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`;

export default FileInput;
