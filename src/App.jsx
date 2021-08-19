import react, { useState } from "react";
import "./App.css";
import Body from "./Body";
import database from "./data";
import Actions from "./Actions";

function App() {
  const [id, setId] = useState(database[0].id);
  function goPrevious() {
    if (id > 0) {
      setId(id - 1);
    } else {
      return;
    }
  }

  function goNext() {
    if (id < database.length - 1) {
      setId(id + 1);
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
          <Body id={id} />
          <Actions goNext={goNext} goPrevious={goPrevious} />
        </div>
      </body>
    </div>
  );
}

export default App;
