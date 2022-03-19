import React, { useState } from "react";
import Form from "./Form";

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function updateFirstName(e) {
    setFirstName(e.target.value)
  }

  function updateLastName(e) {
    setLastName(e.target.value)
  }

  return (
    <Form
      firstName={firstName}
      lastName={lastName}
      updateFirstName={updateFirstName}
      updateLastName={updateLastName}
    />
  );
}

export default ParentComponent;
