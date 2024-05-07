import Button from "./Button";
import { HomeStyled } from "./HomeStyles";

function Home() {
  return (
    <HomeStyled>
      <h1>
        The best pizza <br />
        <span>Straight out of the oven, straight to you.</span>
      </h1>
      <Button type="primary">Continue ordering USER_NAME</Button>
    </HomeStyled>
  );
}

export default Home;
