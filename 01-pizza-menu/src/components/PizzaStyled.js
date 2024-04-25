import styled from "styled-components";

export const Li = styled.li`
  /* Layout */
  display: flex;
  align-items: center;
  gap: 3.2rem;

  img {
    width: 15rem;
    height: 15rem;
    filter: grayscale(${(props) => (props.soldout ? "1" : "0")});
  }

  div {
    text-align: left;

    h3 {
      font-size: 2.6rem;
      margin-bottom: 1rem;
    }

    p {
      color: #888;
      font-size: 1.8rem;
      font-style: italic;
    }

    span {
      font-size: 1.8rem;
      font-weight: 700;
    }
  }
`;
