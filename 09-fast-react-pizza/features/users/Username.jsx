import { UsernameStyled } from "./UsernameStyles";
import { useSelector } from "react-redux";
import { getUsername } from "./userSlice";

function Username() {
  const username = useSelector(getUsername);

  if (!username) return null;

  return <UsernameStyled>{username}</UsernameStyled>;
}

export default Username;
