import React from "react";
import "./Greeting.css";

function Greeting(props) {
  console.log(props);
  console.log(props.appName);
  return (
    <div className="main">
      <h1>Dobrodosli u {props.appName}</h1>
      <h3>Hvala sto ste nas posetili {props.userName} </h3>
    </div>
  );
}

export default Greeting;
