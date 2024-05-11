import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";

const Table = styled.div`
  /* Box */
  border: 1px solid var(--color-grey-200);
  border-radius: 7px;

  /* Font */
  font-size: 1.4rem;

  /* Style */
  background-color: var(--color-grey-0);
  overflow: hidden;
`;

const TableHeader = styled.header`
  /* Layout */
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  align-items: center;
  column-gap: 2.4rem;

  /* Style */
  background-color: var(--color-grey-50);

  /* Box */
  padding: 1.6rem 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);

  /* Font */
  color: var(--color-grey-600);
  font-weight: 600;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

function CabinTable() {
  const { isLoading, cabins } = useCabins();

  if (isLoading) return <Spinner />;

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>

      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}

export default CabinTable;
