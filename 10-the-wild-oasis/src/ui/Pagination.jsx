import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import styled from "styled-components";

const StyledPagination = styled.div`
  /* Box */
  width: 100%;

  /* Layout */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const P = styled.p`
  /* Font */
  font-size: 1.4rem;

  /* Box */
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  /* Font */
  color: ${(props) => (props.active ? "var(--color-brand-50)" : "inherit")};
  font-size: 1.4rem;
  font-weight: 500;

  /* Box */
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: var(--border-radius-sm);

  /* Layout */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  /* Style */
  background-color: ${(props) =>
    props.active ? "var(--color-brand-600)" : "var(--color-grey-50)"};

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    width: 1.8rem;
    height: 1.8rem;
  }

  &:hover:not(:disabled) {
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
  }
`;

function Pagination({ count }) {
  return (
    <StyledPagination>
      <P>
        Showing <span>1</span> to <span>10</span> of <span>{count}</span>{" "}
        results
      </P>

      <Buttons>
        <PaginationButton>
          <HiChevronLeft /> <span>Previous</span>
        </PaginationButton>

        <PaginationButton>
          <span>Next</span> <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
