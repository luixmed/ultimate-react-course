import styled from "styled-components";

export const AccountOperationsStyled = styled.div`
  & > div {
    background-color: #f7f7f7;
    padding: 32px;

    & > * + * {
      margin-top: 20px;
    }
  }
`;
