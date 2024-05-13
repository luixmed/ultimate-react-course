import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  /* Font */
  font-size: 1.4rem;

  /* Box */
  border: 1px solid var(--color-grey-200);
  border-radius: 7px;

  /* Style */
  background-color: var(--color-grey-0);
  overflow: hidden;
`;

const CommonRow = styled.div`
  /* Layout */
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  align-items: center;
  column-gap: 2.4rem;

  /* Animation */
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  /* Font */
  color: var(--color-grey-600);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;

  /* Box */
  padding: 1.6rem 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);

  /* Style */
  background-color: var(--color-grey-50);
`;

const StyledRow = styled(CommonRow)`
  /* Box */
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Footer = styled.footer`
  /* Layout */
  display: flex;
  justify-content: center;

  /* Box */
  padding: 1.2rem;

  /* Style */
  background-color: var(--color-grey-50);

  &:not(:has(*)) {
    display: none;
  }
`;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledHeader role="row" columns={columns}>
      {children}
    </StyledHeader>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}
// function Body({ children }) {}

Table.Header = Header;
Table.Row = Row;
// Table.Body = Body;
Table.Footer = Footer;

export default Table;
