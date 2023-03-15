import React, { useState } from "react";

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
          name="amount"
        />

        <button type="submit" className="btn btn-success float-end btn">
          Send Money
        </button>
      </form>
    </>
  );
}

let fontHead = {
  fontSize: "18px",
  fontWeight: "500",
};

const InputBox = ({ id, type, label, whenChange, state, name }) => {
  return (
    <div className="row my-5" style={fontHead}>
      <label htmlFor={id} className="col-sm-2 col-form-label">
        {label}:
      </label>
      <div className="col-sm-10">
        <input
          name={name}
          type={type}
          className="form-control"
          id={id}
          onChange={whenChange}
          value={state}
          autoComplete="true"
          onWheel={(e) => e.target.blur()}
        />
      </div>
    </div>
  );
};

export const InputGroupBox = ({
  id,
  type,
  label,
  groupText,
  area,
  placeholder,
  whenChange,
  state,
  name,
}) => {
  return (
    <div className="row my-5" style={fontHead}>
      <label htmlFor={id} className="col-sm-2 col-form-label">
        {label}:
      </label>
      <div className="input-group col">
        {area === "start" ? (
          <span className="input-group-text">{groupText}</span>
        ) : (
          ``
        )}
        <input
          type={type}
          className="form-control"
          id={id}
          placeholder={placeholder}
          onChange={whenChange}
          value={state}
          name={name}
          onWheel={(e) => e.target.blur()}
        />
        {area === "end" ? (
          <span className="input-group-text">{groupText}</span>
        ) : (
          ``
        )}
      </div>
    </div>
  );
};

const Fieldset = ({ heading, radioChange, state }) => {
  return (
    <fieldset className="row">
      <legend className="col-form-label col-sm-2 pt-0" style={fontHead}>
        {heading}:
      </legend>
      <div className="col-3">
        {
          <RadioButton
            id="credit"
            name="type"
            value="credit"
            label="credit"
            whenChange={(e) => radioChange(e)}
            checked={state.type === "credit"}
          />
        }
      </div>
      <div className="col">
        {
          <RadioButton
            id="debit"
            name="type"
            value="debit"
            label="debit"
            whenChange={(e) => radioChange(e)}
            checked={state.type === "debit"}
          />
        }
      </div>
    </fieldset>
  );
};

const RadioButton = ({ id, name, value, label, whenChange, checked }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        value={value}
        id={id}
        onChange={(e) => whenChange(e)}
        checked={checked}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
