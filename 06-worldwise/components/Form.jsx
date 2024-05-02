import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { FormStyled } from "./FormStyles";

function Form() {
  const navigate = useNavigate();

  return (
    <FormStyled>
      <h1>FORM</h1>
      <Button
        type="back"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        &larr; Back
      </Button>
    </FormStyled>
  );
}

export default Form;
