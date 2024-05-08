import { useSelector } from "react-redux";
import Button from "./Button";
import { HomeStyled } from "./HomeStyles";
import CreateUser from "../features/users/CreateUser";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <HomeStyled>
      <h1>
        The best pizza. <br />
        <span>Straight out of the oven, straight to you.</span>
      </h1>

      {!username ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue ordering, {username}
        </Button>
      )}
    </HomeStyled>
  );
}

export default Home;
