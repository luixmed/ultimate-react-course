import styled from "styled-components";

const LoginLayout = styled.main`
  /* Box */
  min-height: 100vh;

  /* Layout */
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;

  /* Style */
  background-color: var(--color-grey-50);
`;

function Login() {
  return <LoginLayout>Login</LoginLayout>;
}

export default Login;