import React from "react";

function downloadresume() {
  return (
    <div className="download">
      <div>
        <a
          href="https://s3-ap-southeast-2.amazonaws.com/rohithpotluri.com-resources/Rohith's+Resume.pdf"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default downloadresume;
