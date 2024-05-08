import { Link, useNavigate } from "react-router-dom";
import { LinkButtonStyled } from "./LinkButtonStyles";

function LinkButton({ children, to }) {
  const navigate = useNavigate();

  if (to === "-1")
    return (
      <LinkButtonStyled onClick={() => navigate(-1)}>
        {children}
      </LinkButtonStyled>
    );

  return (
    <LinkButtonStyled to={to} as={Link}>
      {children}
    </LinkButtonStyled>
  );
}

export default LinkButton;
