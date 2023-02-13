import React, { useState } from "react";
import UserForm from "./UserForm/UserForm";
import UserList from "./UserList/UserList";
import Modal from "./Modal/Modal";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  function addUserHandler(username, age) {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        username: username,
        age: age,
        id: Math.random().toString(),
      });
      return updatedUsers;
    });
  }

  function displayModalHandler(message) {
    setShowModal(true);
    console.log("setShowModal(true);");
    setModalMessage(message);
    //content = ();
  }

  function deleteUserHandler(userId) {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);
      return updatedUsers;
    });
  }

  return (
    <div id="background">
      <section id="users-form">
        <UserForm
          onAddUser={addUserHandler}
          onDisplayForm={displayModalHandler}
        />
      </section>
      <section id="users">
        <UserList items={users} onDeleteItem={deleteUserHandler} />
      </section>
      {!showModal ? "" : <Modal show={showModal} message={modalMessage} setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
