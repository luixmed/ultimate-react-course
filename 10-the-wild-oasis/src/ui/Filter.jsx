import styled, { css } from "styled-components";
import { useSearchParams } from "react-router-dom";

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

  /* Animation */
  transition: all 0.3s;

  &:hover:not(:disabled) {
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
  }

  ${(props) =>
    props.active &&
    css`
      color: var(--color-brand-50);
      background-color: var(--color-brand-600);
    `}
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilterValue =
    searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          onClick={() => handleClick(option.value)}
          key={option.value}
          active={option.value === currentFilterValue}
          disabled={option.value === currentFilterValue}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
