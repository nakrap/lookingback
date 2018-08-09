import React from "react";
import "./Cards.css"

const Cards = props => (
  <div className="pictureCard card"  data-id={props.id} onClick={props.onClick}> 
      <div className="card-body">
        <img alt={props.name} src={props.image} />
        <div><strong> {props.name}</strong></div>
  
        
      </div>
  
    </div>
  
  
  );

export default Cards;
