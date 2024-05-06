import { HomeStyled } from "./HomeStyles";

function Home() {
  return (
    <HomeStyled>
      <h1>
        The best pizza <br />
        <span>Straight out of the oven, straight to you.</span>
      </h1>
      <button>Continue ordering USER_NAME</button>
    </HomeStyled>
  );
}

export default Home;
