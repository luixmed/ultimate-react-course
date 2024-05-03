import { useState } from "react";
import PageNavigation from "../components/PageNavigation";
import { LoginStyled } from "./LoginStyles";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  return (
    <LoginStyled>
      <PageNavigation />

      <form>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
          <BackButton />
        </div>
      </form>
    </LoginStyled>
  );
}

export default Login;
