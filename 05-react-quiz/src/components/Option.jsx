import { OptionStyled } from "./OptionStyles";

function Option({ option }) {
  return (
    <OptionStyled>
      <button>{option}</button>
    </OptionStyled>
  );
}

export default Option;
