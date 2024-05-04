import { useState } from "react";
import { CreateCustomerStyled } from "./CreateCustomerStyles";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function CreateCustomer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <CreateCustomerStyled>
      <h2>Create new customer</h2>
      <div>
        {/* FULL NAME */}
        <div>
          <label>Customer full name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* NATIONAL ID */}
        <div>
          <label>National ID</label>
          <input
            type="text"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>

        {/* BUTTON */}
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </CreateCustomerStyled>
  );
}

export default CreateCustomer;
