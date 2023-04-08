import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <>
      <header className="header">
        <h1 style={{ color: "white", marginLeft: "10.5%" }}>Logo</h1>
        {props.children}
      </header>
    </>
  );
}

export { Navbar };
