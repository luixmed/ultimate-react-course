import { Link } from "react-router-dom";
import { ButtonStyled } from "./ButtonStyles";

function Button({ children, type, to, onClick, disabled }) {
  if (to)
    return (
      <ButtonStyled to={to} type={type} as={Link}>
        {children}
      </ButtonStyled>
    );

  if (onClick)
    return (
      <ButtonStyled onClick={onClick} type={type} disabled={disabled}>
        {children}
      </ButtonStyled>
    );

  return (
    <ButtonStyled type={type} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
