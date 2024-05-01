import styled from "styled-components";

export const HomePageStyled = styled.main`
  /* Box */
  height: calc(100vh - 5rem);
  padding: 2.5rem 5rem;
  margin: 2.5rem;

  /* Styles */
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.8),
      rgba(36, 42, 46, 0.8)
    ),
    url("bg.jpg");
  background-size: cover;
  background-position: center;

  section {
    /* Font */
    text-align: center;

    /* Layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;

    /* Box */
    height: 85%;
  }

  h1 {
    font-size: 4.5rem;
    line-height: 1.3;
  }

  h2 {
    /* Font */
    color: var(--color-light--1);
    font-size: 1.9rem;

    /* Box */
    width: 90%;
    margin-bottom: 2.5rem;
  }
`;
