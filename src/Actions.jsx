import "./Actions.css";
import react from "react";
import AddUser from "./AddUser";

export default function Actions(props) {
  const {
    id,
    goPrevious,
    goNext,
    setToggleBody,
    setToggleActions,
    setToggleAddUser,
    toggleAddUser,
    database,
  } = props;

  function addUser() {
    console.log("in addUser");
    return (
      <div>
        <AddUser />
      </div>
    );
  }
  function deleteUser() {
    database.splice(id, 1);
    return <div>Success</div>;
  }

  return (
    <div className="navbar">
      <button className="moveBtn" onClick={() => goPrevious()}>
        {" "}
        {" < Previous "}{" "}
      </button>
      <div className="editBtns">
        <button>Edit</button>
        <button
          onClick={() => {
            deleteUser();
          }}
        >
          Delete
        </button>
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
