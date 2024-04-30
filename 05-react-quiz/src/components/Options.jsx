import Option from "./Option";
import { OptionsStyled } from "./OptionsStyles";

function Options({ options }) {
  return (
    <OptionsStyled>
      {options.map((option) => (
        <Option key={option} option={option} />
      ))}
    </OptionsStyled>
  );
}

export default Options;
