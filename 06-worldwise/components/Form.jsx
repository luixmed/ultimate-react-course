import { useState } from "react";
import { FormStyled } from "./FormStyles";
import Button from "./Button";
import BackButton from "./BackButton";

function Form() {
  const [cityName, setCityName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [emoji, setEmoji] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <FormStyled>
      {/* CITY NAME */}
      <div>
        <label htmlFor="cityName">City Name</label>
        <input
          id="cityName"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <span>{emoji}</span>
      </div>

      {/* NOTES */}
      <div>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>

      {/* BUTTONS */}
      <div>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </FormStyled>
  );
}

export default Form;
