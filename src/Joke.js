import React from "react";

export default function Joke(props) {
  return (
    <div className="joke">
      {props.setup && <p>setup: {props.setup}</p>}
      <p>punchline: {props.Punchline}</p>
      <span>likes: {props.vote}</span>
      <br />
      {props.isPun && <span>It's a pun</span>}
      <hr />
    </div>
  );
}
