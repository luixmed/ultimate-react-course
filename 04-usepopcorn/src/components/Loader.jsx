import styled from "styled-components";

const Loading = styled.div`
  min-height: 80vh;

  display: grid;
  place-content: center;

  p {
    font-size: 4.4rem;
    text-align: center;
  }
`;

function Loader() {
  return (
    <Loading>
      <p>Loading...</p>
    </Loading>
  );
}

export default Loader;
