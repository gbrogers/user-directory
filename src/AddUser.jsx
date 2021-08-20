import { useState } from "react";
import database from "./data";
import "./AddUser.css";

export default function AddUser(props) {
  //   const { setToggleBody, setToggleAddUser } = props;
  const [fname, setFName] = useState();
  const [lname, setLName] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [job, setJob] = useState();
  const [employer, setEmployer] = useState();
  const [favMovOne, setFavMovOne] = useState();
  const [favMovTwo, setFavMovTwo] = useState();
  const [favMovThree, setfavMovThree] = useState();

  console.log("in AddUser");

  return (
    <form>
      <div>
        <label>First Name: </label>
        <input type="text"></input>
      </div>
      <div>
        <label>Last Name: </label>
        <input type="text"></input>
      </div>
      <div>
        <label>City:</label>
        <input type="text"></input>
      </div>
      <div>
        <label>Country:</label>
        <input type="text"></input>
      </div>
      <div>
        <label>Job Title:</label>
        <input type="text"></input>
      </div>
      <div>
        <label>Employer:</label>
        <input type="text"></input>
      </div>
      <div>
        <label>Country:</label>
        <input type="text"></input>
      </div>
      <div>
        <label>Favorite Movie #1:</label>
        <input type="text"></input>
      </div>
      <div>
        <label>Favorite Movie #2:</label>
        <input type="text"></input>
      </div>
      <div>
        <label>Favorite Movie #3:</label>
        <input type="text"></input>
      </div>

      <button
        onClick={() => {
          props.setToggleAddUser(false);
          props.setToggleBody(true);
          props.setToggleActions(true);
        }}
      >
        Add
      </button>
    </form>
  );
}
