import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(enteredUsername, enteredAge);
    if (
      enteredUsername.trim().toString().length === 0 ||
      enteredAge.trim().toString().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Value cannot be empty",
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: "Invalid Input",
        message: "Value cannot be lower than 0",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label>
            User Name
            <input
              value={enteredUsername}
              onChange={usernameChangeHandler}
            ></input>
          </label>
          <label>
            Age (years old)
            <input value={enteredAge} onChange={ageChangeHandler}></input>
          </label>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
