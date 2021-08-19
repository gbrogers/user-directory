import react from "react";
import "./Actions.css";

export default function Actions(props) {
  const { goPrevious, goNext } = props;
  return (
    <div className="navbar">
      <button className="moveBtn" onClick={() => goPrevious()}>
        {" "}
        {" < Previous "}{" "}
      </button>
      <div className="editBtns">
        <button>Edit</button>
        <button>Delete</button>
        <button>New</button>
      </div>
      <button className="moveBtn" onClick={() => goNext()}>
        {" Next > "}
      </button>
    </div>
  );
}
