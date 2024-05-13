import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

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

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (openName !== name) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
