import react, { useState } from "react";
import database from "./data";
import "./Body.css";

export default function Body(props) {
  const { id, name, city, country, title, employer, favoriteMovies } =
    database[props.id];

  return (
    <div className="userContent">
      <div className="top-section">
        <h1>{`${name.first} ${name.last}`}</h1>
        <aside className="counter">{`${props.id + 1}/${
          database.length
        }`}</aside>
      </div>
      <p>
        <span>From: </span>
        {`${city}, ${country}`}
      </p>
      <p>
        <span>Job Title: </span>
        {`${title}`}
      </p>
      <p>
        <span>Employer: </span>
        {`${employer}`}
      </p>

      <span>Favorite Movies: </span>

      <ol>
        {favoriteMovies.map((item) => {
          return <li>{item}</li>;
        })}
      </ol>
    </div>
  );
}
