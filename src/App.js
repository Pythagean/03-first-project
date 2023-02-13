import React, {useState} from "react";
import UserForm from "./UserForm/UserForm";
import UserList from './UserList/UserList';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  function addUserHandler(username, age){
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ username: username, age: age, id: Math.random().toString() });
      return updatedUsers;
    });
  }

  function deleteUserHandler(userId){
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== userId);
      return updatedUsers;
    });
  }

  return (
    <div id='background'>
      <section id="users-form">
        <UserForm onAddUser={addUserHandler} />
      </section>
      <section id="users">
        <UserList items={users} onDeleteItem={deleteUserHandler} />
      </section>
    </div>
  );
}

export default App;
