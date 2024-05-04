import styled from "styled-components";

export const CreateCustomerStyled = styled.div`
  & > div {
    padding: 32px;
    background-color: #f7f7f7;

    & > * + * {
      margin-top: 20px;
    }
  }
`;
