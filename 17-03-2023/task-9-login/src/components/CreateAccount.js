import React, { useEffect, useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import { Fieldset, InputBox, InputGroupBox } from "./commonComponents";

export default function CreateAccount() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    customerId: "",
    customerName: "",
    customerPin: "",
    customerStatus: "",
    customerAccountNumber: "",
    customerAccountBalance: "",
    customerAadhar: "",
    customerPan: "",
    customerContactNumber: "",
    customerEmail: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form className="col-10 col-xl-5 m-auto bg-light px-4 py-2 pb-5 my-5 shadow">
      <InputBox
        id="name"
        type="text"
        label="Name"
        name="customerName"
        whenChange={(e) => handleChange(e)}
        state={user.customerName}
      />
      <InputBox
        id="email"
        type="email"
        label="Email"
        whenChange={(e) => handleChange(e)}
        state={user.email}
        name="email"
      />
      <InputBox
        id="password"
        type="password"
        label="Password"
        whenChange={(e) => handleChange(e)}
        state={user.password}
        name="password"
      />

      <InputGroupBox
        id="contact"
        type="number"
        label="Contact"
        groupText="+91"
        area="start"
        whenChange={(e) => handleChange(e)}
        state={user.contact}
        name="contact"
      />

      <Fieldset
        heading="Type"
        radioChange={(e) => handleChange(e)}
        state={user}
      />

      <button
        type="submit"
        className="btn btn-success float-end btn"
        onClick={(e) => onSubmit(e)}
      >
        Create Account
      </button>
    </form>
  );
}
