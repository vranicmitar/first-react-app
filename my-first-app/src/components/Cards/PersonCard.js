import React from "react";
import "./PersonCard.css";
import { FaGithub } from "react-icons/fa";

function PersonCard(props) {
  return (
    <>
      <div className="cards">
        <div className="prvi">
          <img src={props.imageURL}></img>
          <h2 id="naslov">{props.fullName}</h2>
          <h3>{props.location}</h3>
          <p>{props.description}</p>
          <FaGithub
            className="icon"
            style={{ position: "relative", top: "10px" }}
          />
        </div>
      </div>
    </>
  );
}

export { PersonCard };
