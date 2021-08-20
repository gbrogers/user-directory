import react, { useState } from "react";
import "./App.css";
import Body from "./Body";
import data from "./data";
import Actions from "./Actions";
import AddUser from "./AddUser";

function App() {
  const [database, setDatabase] = useState(data);
  const [id, setId] = useState(database[0].id);
  const [toggleBody, setToggleBody] = useState(true);
  const [toggleActions, setToggleActions] = useState(true);
  const [toggleAddUser, setToggleAddUser] = useState(false);

  function goPrevious() {
    if (id > 0) {
      setId(id - 1);
    } else {
      return;
    }
  }

  function goNext() {
    if (id < database.length - 1) {
      setId((previousState) => previousState + 1);
    } else {
      return;
    }
  }

  return (
    <div>
      <header>
        <h3>Home</h3>
      </header>
      <body>
        <div className="userCard">
          {toggleBody && <Body id={id} />}
          {toggleActions && (
            <Actions
              id={id}
              database={database}
              goNext={goNext}
              goPrevious={goPrevious}
              setToggleBody={setToggleBody}
              setToggleActions={setToggleActions}
              setToggleAddUser={setToggleAddUser}
            />
          )}
        </div>
        {toggleAddUser && (
          <AddUser
            setToggleAddUser={setToggleAddUser}
            setToggleBody={setToggleBody}
            setToggleActions={setToggleActions}
            setToggleAddUser={setToggleAddUser}
            toggleAddUser={toggleAddUser}
            setDatabase={setDatabase}
            database={database}
          />
        )}
      </body>
    </div>
  );
}

export default App;
