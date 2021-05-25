import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{   clear: "both", paddingTop: 2, textAlign: "center" }}
      className="jumbotron bg-success text-white "
    >
      {children}
    </div>
  );
}

export default Jumbotron;
