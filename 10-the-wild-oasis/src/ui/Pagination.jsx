import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { PAGE_SIZE } from "../utils/constants";

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
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const totalPages = Math.ceil(count / PAGE_SIZE);

  function prevPage() {
    const prevPageValue = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prevPageValue);
    setSearchParams(searchParams);
  }

  function nextPage() {
    const nextPageValue =
      currentPage === totalPages ? currentPage : currentPage + 1;

    searchParams.set("page", nextPageValue);
    setSearchParams(searchParams);
  }

  if (totalPages <= 1) return null;

  const lowerLimit = (currentPage - 1) * PAGE_SIZE + 1;
  const upperLimit =
    currentPage === totalPages ? count : currentPage * PAGE_SIZE;

  return (
    <StyledPagination>
      <P>
        Showing <span>{lowerLimit}</span> to <span>{upperLimit}</span> of{" "}
        <span>{count}</span> results
      </P>

      <Buttons>
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft /> <span>Previous</span>
        </PaginationButton>

        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          <span>Next</span> <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
