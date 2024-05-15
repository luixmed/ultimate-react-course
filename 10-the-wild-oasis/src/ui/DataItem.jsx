import styled from "styled-components";

const StyledDataItem = styled.div`
  /* Layout */
  display: flex;
  align-items: center;
  gap: 1.6rem;

  /* Box */
  padding-block: 0.8rem;
`;

const Label = styled.span`
  /* Font */
  font-weight: 500;

  /* Layout */
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}

export default DataItem;
