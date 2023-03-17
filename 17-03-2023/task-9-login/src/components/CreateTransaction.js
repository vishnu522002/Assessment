import React, { useState } from "react";
import {
  Fieldset,
  fontHead,
  InputBox,
  InputGroupBox,
} from "./commonComponents";

export default function CreateTransaction() {
  const [user, setUser] = useState({
    transactionId: "",
    date: "",
    type: "credit",
    mode: "",
    amount: "",
    to: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2 className="text-center my-3">New Transaction</h2>
      <form className="col-10 col-xl-5 m-auto bg-light px-4 py-2 pb-5 my-4 shadow">
        <InputBox
          id="name"
          type="text"
          label="ID"
          name="transactionId"
          whenChange={(e) => handleChange(e)}
          state={user.transactionId}
        />
        <InputBox
          id="date"
          type="date"
          label="Date"
          whenChange={(e) => handleChange(e)}
          state={user.date}
          name="date"
        />
        <Fieldset
          heading="Type"
          radioChange={(e) => handleChange(e)}
          state={user}
        />
        <div className="row my-5">
          <label className="col-sm-2 col-form-label" style={fontHead}>
            Mode:
          </label>
          <div className="col-sm-10">
            <select className="form-select" value={user.mode}>
              <option value="neft">NEFT</option>
              <option value="upi">UPI</option>
              <option value="rtgs">RTGS</option>
            </select>
          </div>
        </div>

        <InputGroupBox
          id="amount"
          type="number"
          label="Amount"
          groupText="Rs"
          area="end"
          whenChange={(e) => handleChange(e)}
          state={user.amount}
          name="amount"
        />

        <InputGroupBox
          id="to"
          type="text"
          label="To"
          groupText="@"
          area="start"
          whenChange={(e) => handleChange(e)}
          state={user.to}
          name="to"
        />

        <button type="submit" className="btn btn-success float-end btn">
          Send Money
        </button>
      </form>
    </>
  );
}
