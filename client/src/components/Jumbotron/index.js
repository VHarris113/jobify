import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 600, clear: "both", paddingTop: 2, textAlign: "center" }}
      className="jumbotron bg-success text-white "
    >
      {children}
    </div>
  );
}

export default Jumbotron;
