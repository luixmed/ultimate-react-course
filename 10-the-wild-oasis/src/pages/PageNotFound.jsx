import styled from "styled-components";
import Heading from "../ui/Heading";
import { useMoveBack } from "../hooks/useMoveBack";
import Button from "../ui/Button";

const StyledPageNotFound = styled.main`
  /* Box */
  height: 100vh;
  padding: 4.8rem;

  /* Layout */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Style */
  background-color: var(--color-grey-50);
`;

const Box = styled.div`
  /* Font */
  text-align: center;

  /* Box */
  padding: 4.8rem;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  /* Layout */
  flex: 0 1 96rem;

  /* Style */
  background-color: var(--color-grey-0);

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          The page you are looking for could not be found 😥
        </Heading>
        <Button onClick={moveBack} size="large">
          &larr; Go back
        </Button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
