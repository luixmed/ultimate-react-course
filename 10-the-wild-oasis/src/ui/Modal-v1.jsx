import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const StyledModal = styled.div`
  /* Layout */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Style */
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-lg);

  /* Box */
  padding: 3.2rem 4rem;
  border-radius: var(--border-radius-lg);

  /* Animation */
  transition: all 0.5s;
`;

const Overlay = styled.div`
  /* Layout */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  /* Box */
  width: 100%;
  height: 100vh;

  /* Style */
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);

  /* Animation */
  transition: all 0.5s;
`;

const Button = styled.button`
  /* Layout */
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  /* Border */
  padding: 0.4rem;
  border: none;
  border-radius: var(--border-radius-sm);

  /* Style */
  background: none;

  /* Animation */
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

function Modal({ children, onClose }) {
  return (
    <Overlay>
      <StyledModal>
        <Button onClick={onClose}>
          <HiXMark />
        </Button>
        <div>{children}</div>
      </StyledModal>
    </Overlay>
  );
}

export default Modal;
