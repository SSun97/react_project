import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import { useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {

  const [error, setError] = useState();

  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value
    if (enteredUserName === "" || enteredUserAge === "") {
      setError({
        title: "An Error Occurred!",
        message: "Name or Age cannot be empty",
      });
      return;
    }
    if (enteredUserAge < 0) {
      setError({
        title: "An Error Occurred!",
        message: "Age cannot be < 0",
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        ></ErrorModal>
      )}
      <Card>
        <form className={classes.input} onSubmit={addUserHandler}>
          <label>
            User Name
            <input
              type="text"
              ref={nameInputRef}
            ></input>
          </label>
          <label>
            Age (years old)
            <input
              type="number"
              ref={ageInputRef}
            ></input>
          </label>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
