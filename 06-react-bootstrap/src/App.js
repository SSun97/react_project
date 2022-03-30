import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
function App() {
  const [usersList, setUsersList] = useState([]);
  const usersListHandler = (uName, uAge) => {
    setUsersList((prevList) => {
      return [...prevList, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }
  return <div>
    <AddUser onAddUser={usersListHandler}></AddUser>
    <UsersList users={usersList}></UsersList>
  </div>;
}

export default App;
