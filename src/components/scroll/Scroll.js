import React from "react";

function Scroll() {
  return (
    <div className="scroll">
      <div
        onclick="topFunction()"
        title="Go to top"
        style={{ fontWeight: "bolder" }}
      >
        ^
      </div>
    </div>
  );
}

export default Scroll;
