import { useState } from "react";
import { CreateUserStyled } from "./CreateUserStyles";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateName } from "./userSlice";

function CreateUser() {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <CreateUserStyled onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by teeling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </CreateUserStyled>
  );
}

export default CreateUser;
