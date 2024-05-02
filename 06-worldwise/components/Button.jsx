import { ButtonStyled } from "./ButtonStyles";

function Button({ children, onClick, type }) {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
