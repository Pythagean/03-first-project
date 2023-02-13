import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./UserForm.module.css";

function UserForm(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [invalidMessage, setInvalidMessage] = useState("");

  function formSubmitHandler(event) {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      //setValidInput(false);
      setInvalidMessage("Username and Age must be entered");
      props.onDisplayForm("Username and Age must be entered");
      return;
    }

    if (age < 0) {
      setInvalidMessage("Age must be greater than 0");
      props.onDisplayForm("Age must be greater than 0");
      return;
    }

    props.onAddUser(username, age);

    setUsername("");
    setAge("");
  }

  function usernameChangeHandler(event) {
    setUsername(event.target.value);
  }

  function ageChangeHandler(event) {
    setAge(event.target.value);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles["form-control"]}`}>
        <label>Username</label>
        <input type="text" value={username} onChange={usernameChangeHandler} />

        <label>Age (years)</label>
        <input type="number" value={age} onChange={ageChangeHandler} />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
}

export default UserForm;
