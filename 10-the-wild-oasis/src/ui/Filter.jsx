import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  /* Box */
  padding: 0.4rem;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-sm);

  /* Layout */
  display: flex;
  gap: 0.4rem;

  /* Style */
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
`;

const FilterButton = styled.button`
  /* Font */
  font-size: 1.4rem;
  font-weight: 500;

  /* Box */
  padding: 0.44rem 0.8rem;
  border: none;
  border-radius: var(--border-radius-sm);

  /* Style */
  background-color: var(--color-grey-0);

  /* ${(props) =>
    props.active &&
    css`
      color: var(--color-brand-50);
      background-color: var(--color-brand-600);
    `} */

  &:active {
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
  }

  /* Animation */
  transition: all 0.3s;

  &:hover:not(:disabled) {
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
  }
`;

function Filter() {
  return (
    <StyledFilter>
      <FilterButton>All</FilterButton>
      <FilterButton>No discount</FilterButton>
      <FilterButton>With discount</FilterButton>
    </StyledFilter>
  );
}

export default Filter;
