import React from "react";

const TopSpots = props => (
  <div className="card well">
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a
      className="btn btn-info"
      role="button"
      href={`https://maps.google.com/?q=${props.location[0]},${
        props.location[1]
      }`}
    >
      Location
    </a>
  </div>
);

export default TopSpots;
