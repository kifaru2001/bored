import React from "react";
import Item from "./Items";
import "./mems.css";

export default function Members({ data }) {
  return (
    <>
      <h3>SII LEADERBOARD</h3>
      <hr />
      <ul className="item-wrapper">
        {data.map((row) => (
          <Item row={row} key={row.userID} />
        ))}
      </ul>
    </>
  );
}
