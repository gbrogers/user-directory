import { useState } from "react";
import database from "./data";
import "./AddUser.css";

export default function AddUser(props) {
  const {
    setToggleBody,
    setToggleAddUser,
    setToggleActions,
    database,
    setDatabase,
  } = props;
  const [fname, setFName] = useState();
  const [lname, setLName] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [job, setJob] = useState();
  const [employer, setEmployer] = useState();
  const [favMovOne, setFavMovOne] = useState();
  const [favMovTwo, setFavMovTwo] = useState();
  const [favMovThree, setfavMovThree] = useState();

  function submit() {
    const newData = {
      id: database.length,
      name: { first: fname, last: lname },
      city,
      country,
      employer,
      title: job,
      favoriteMovies: [favMovOne, favMovTwo, favMovThree],
    };
    setDatabase(database.push(newData));
  }

  console.log("in AddUser");

  return (
    <form>
      <div>
        <label>First Name: </label>
        <input
          type="text"
          onChange={(e) => {
            setFName(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>Last Name: </label>
        <input
          type="text"
          onChange={(e) => {
            setLName(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>Country:</label>
        <input
          type="text"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>Job Title:</label>
        <input
          type="text"
          onChange={(e) => {
            setJob(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>Employer:</label>
        <input
          type="text"
          onChange={(e) => {
            setEmployer(e.target.value);
          }}
        ></input>
      </div>

      <div>
        <label>Favorite Movie #1:</label>
        <input
          type="text"
          onChange={(e) => {
            setFavMovOne(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>Favorite Movie #2:</label>
        <input
          type="text"
          onChange={(e) => {
            setFavMovTwo(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>Favorite Movie #3:</label>
        <input
          type="text"
          onChange={(e) => {
            setfavMovThree(e.target.value);
          }}
        ></input>
      </div>

      <button
        onClick={() => {
          submit();
          setToggleAddUser(false);
          setToggleBody(true);
          setToggleActions(true);
        }}
      >
        Add
      </button>
    </form>
  );
}
