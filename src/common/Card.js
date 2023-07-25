import React from "react";

import '../styles/main.css'

export default function Card(props) {

  return (
    <div className="card">
      <h3 className="card-title">{props.title}</h3>
      <h2 className="card-amount">{props.amount} &#8377;</h2>
    </div>
  );
}
