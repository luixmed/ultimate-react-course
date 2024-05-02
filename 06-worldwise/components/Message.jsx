import { MessageStyled } from "./MessageStyles";

function Message({ message }) {
  return (
    <MessageStyled>
      <span role="img">👋</span>
      {message}
    </MessageStyled>
  );
}

export default Message;
