import { useState } from "react";
import { Div } from "./BoxStyles";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Div>
      <button onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </Div>
  );
}

export default Box;
