import React from "react";
import "./HotelCard.css";
import { FaStar } from "react-icons/fa";

function HotelCard(props) {
  return (
    <>
      <div className="hotelcards">
        <div className="first">
          <img src={props.imageURL}></img>
          <h3>{props.caption}</h3>
          {/* <FaStar /> */}
          <p>{props.description}</p>
          <p>{props.reviews}</p>
        </div>
      </div>
    </>
  );
}

export { HotelCard };

// <div className="hotelcards">
// <div className="prvi">
//   <img src={props.imageURL}></img>
//   <h1>{props.caption}</h1>
//   {/* <FaStar/> <FaStar/> <FaStar/>  */}
//   <p>{props.description}</p>
//   <p>{props.reviews}</p>
// </div>
// </div>
