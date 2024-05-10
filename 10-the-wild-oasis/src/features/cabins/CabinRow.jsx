import styled from "styled-components";

const TableRow = styled.div`
  /* Layout */
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  /* Box */
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;

  /* Animation */
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-family: "Sono";
  color: var(--color-grey-600);
  font-size: 1.6rem;
  font-weight: 600;
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  color: var(--color-green-700);
  font-weight: 500;
`;

function CabinRow({ cabin }) {
  return <div>ROW</div>;
}

export default CabinRow;
