import React from "react";
import './SelectionTab.css'

export default function SelectionTab() {
  return (
    <>
      <div className="tab-container">
        <ul>
          <li>Playing</li>
          <li>Played</li>
          <li>Pending</li>
        </ul>
      </div>
    </>
  );
}
