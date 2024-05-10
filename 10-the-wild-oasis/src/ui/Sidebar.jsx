import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);

  /* Box */
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  /* Layout */
  grid-row: 1 / -1;

  & > *:first-child {
    margin-bottom: 3.2rem;
  }
`;
function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
