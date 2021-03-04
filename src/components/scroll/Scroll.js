import React from "react";

function Scroll() {
  return (
    <div className="scroll">
      <a href="top" title="Go to top" style={{ scrollBehavior: "auto" }}>
        ^
      </a>
    </div>
  );
}

export default Scroll;
