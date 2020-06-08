import React from "react";

function Gate({ isOpen }) {
  return (
    <div className="myContainer">
      <p>
        This component let us know the state of Gate if it is open this will
        render Open otherwise Closed.
      </p>
      <div className="doorDiv">
        <h1>The Gate Is {isOpen === true ? "Open" : "Closed"}</h1>
      </div>
    </div>
  );
}

export default Gate;
