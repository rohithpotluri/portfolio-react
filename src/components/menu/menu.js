import React from "react";

function Header() {
  return (
    <div
      className="header-color flexbox-container"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        textAlign: "center",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap"
        rel="stylesheet"
      ></link>
      <div>
        <a href="#about">About</a>
      </div>
      <div>
        <a href="#education">Education & Experience</a>
      </div>
      <div>
        <a href="#skills">Skills & Languages</a>
      </div>
      <div>
        <a href="#awards">Awards & Interests</a>
      </div>
    </div>
  );
}

export default Header;
