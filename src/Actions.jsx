import react, { useState } from "react";
import "./Actions.css";
import AddUser from "./AddUser";

export default function Actions(props) {
  const {
    goPrevious,
    goNext,
    setToggleBody,
    setToggleActions,
    setToggleAddUser,
    toggleAddUser,
  } = props;

  function addUser() {
    console.log("in addUser");
    return (
      <div>
        <AddUser />
      </div>
    );
  }

  return (
    <div className="navbar">
      <button className="moveBtn" onClick={() => goPrevious()}>
        {" "}
        {" < Previous "}{" "}
      </button>
      <div className="editBtns">
        <button>Edit</button>
        <button>Delete</button>
        <button
          onClick={() => {
            setToggleAddUser(true);
            setToggleBody(false);
            setToggleActions(false);
          }}
        >
          New
        </button>
      </div>
      <button className="moveBtn" onClick={() => goNext()}>
        {" Next > "}
      </button>
      {toggleAddUser && (
        <AddUser
          setToggleAddUser={setToggleAddUser}
          setToggleBody={setToggleBody}
          setToggleActions={setToggleActions}
        />
      )}
    </div>
  );
}
