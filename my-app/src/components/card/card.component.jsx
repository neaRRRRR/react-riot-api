import React from "react";
import "./card.style.css";
export const Card = (props) => (
  <div className="card-container">
    <img alt="championsImg" src={props.champion.icon}></img>
    <h2>{props.champion.name}</h2>
    <h3>{props.champion.title}</h3>
  </div>
);
