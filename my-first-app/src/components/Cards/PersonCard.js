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
          <a
            href={props.goToRepositories}
            target="blank"
            style={{ color: "darkblue" }}
            className="gitHub"
          >
            <FaGithub style={{ width: "35px", height: "35px" }} />
          </a>
        </div>
      </div>
    </>
  );
}

export { PersonCard };
