import { useState } from "react";
import { AccountOperationsStyled } from "./AccountOperationsStyles";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");

  function handleDeposit() {}
  function handleRequestLoan() {}

  return (
    <AccountOperationsStyled>
      <h2>Your account operations</h2>
      <div>
        {/* DEPOSIT */}
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit}>{`Deposit ${depositAmount}`}</button>
        </div>

        {/* WITHDRAW */}
        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
        </div>

        {/* LOAN */}
        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Loan amount"
          />
          <input
            type="text"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>
      </div>
    </AccountOperationsStyled>
  );
}

export default AccountOperations;
