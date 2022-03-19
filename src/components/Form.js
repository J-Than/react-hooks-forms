import React, { useState } from "react";

function Form({ firstName, lastName, updateFirstName, updateLastName}) {

  return (
    <form>
      <input type="text" onChange={updateFirstName} value={firstName} />
      <input type="text" onChange={updateLastName} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
