import { useState } from "react";
import { BoxStyled } from "./BoxStyles";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <BoxStyled>
      <button onClick={() => setIsOpen((open) => !open)} className="open-close">
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </BoxStyled>
  );
}

export default Box;
