import { UsernameStyled } from "./UsernameStyles";
import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return <UsernameStyled>{username}</UsernameStyled>;
}

export default Username;
