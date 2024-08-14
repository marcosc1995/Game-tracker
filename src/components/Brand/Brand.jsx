import React from "react";
import "./Brand.css";
import { IoGameController } from "react-icons/io5";

export default function Brand() {
  return (
    <>
      <div className="brand">
        <h2>Game</h2>
        <IoGameController className="brand-icon" />
        <h2>Tracker</h2>
      </div>
    </>
  );
}
