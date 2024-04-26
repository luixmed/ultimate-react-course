import styled from "styled-components";

export const Li = styled.li`
  /* Font */
  color: white;
  font-size: 1.8rem;
  text-align: center;

  /* Layout */
  display: flex;
  align-items: center;
  gap: 1rem;

  input:focus {
    background-color: #d16c00;
  }

  button {
    background: none;
  }

  span {
    text-decoration: ${(props) => (props.packed ? "line-through" : "")};
  }
`;
