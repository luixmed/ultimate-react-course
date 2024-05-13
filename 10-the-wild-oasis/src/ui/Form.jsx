import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      /* Box */
      padding: 2.4rem 4rem;
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);

      /* Style */
      background-color: var(--color-grey-0);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}

  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
