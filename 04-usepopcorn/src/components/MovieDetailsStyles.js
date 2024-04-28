import styled from "styled-components";

export const Details = styled.div`
  /* Font */
  color: white;

  p.watched-rating {
    text-align: center;

    /* Box */
    width: 70%;
    margin-inline: auto;
    padding: 1rem;
    border-radius: 10rem;

    /* Style */
    background-color: #495057;
  }
`;

export const OpenCloseBtn = styled.button`
  /* Font */
  color: black;
  font-size: 2.4rem;

  /* Box */
  width: 4rem;
  height: 4rem;
  border-radius: 50%;

  /* Style */
  background-color: white;

  /* Layout */
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

export const Header = styled.header`
  /* Box */
  margin-bottom: 3.2rem;

  /* Layout */
  display: grid;
  grid-template-columns: 25rem 1fr;
  gap: 3.6rem;

  div {
    padding-top: 2.4rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
`;

export const Rating = styled.div`
  /* Box */
  width: 70%;
  margin-inline: auto;
  padding: 1.6rem 2.4rem;
  border-radius: 7px;
  /* margin-bottom: 3.2rem; */

  /* Layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  /* Style */
  background-color: #495057;
`;

export const AddBtn = styled.button`
  /* Font */
  color: inherit;
  font-size: 1.5rem;
  /* Box */
  width: 100%;
  padding: 1rem;
  border-radius: 10rem;

  /* Style */
  background-color: #7950f2;
`;

export const Text = styled.section`
  /* Box */
  padding: 3.2rem 2.4rem;

  p:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;
