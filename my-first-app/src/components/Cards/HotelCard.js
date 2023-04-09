import React from "react";
import "./HotelCard.css";
import { FaStar } from "react-icons/fa";

function HotelCard(props) {
  const oneStar = <span>⭐</span>;
  const stars = (num) => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(oneStar);
    }
    return arr;
  };

  return (
    <>
      <div className="hotelcards">
        <div className="first">
          <img src={props.imageURL}></img>
          <h3>{props.caption}</h3>
          <h4>{stars(props.stars)}</h4>
          <p>{props.description}</p>
          <p>{props.reviews}</p>
          {/* 1.nacin ulsovnog prikazivanja (Conditional Rendering) */}
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
