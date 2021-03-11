import React from "react";
import Profile from "../profile-tile";

function Header() {
  return (
    <div>
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
      <div className="gridbox-element">
        <div>
          <div className="nameTile">
            <div>
              <div
                style={{
                  fontSize: "24px",
                  fontFamily: "serif",
                  letterSpacing: "0.35px",
                }}
              >
                Hello, I'm
              </div>
              <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&display=swap"
                rel="stylesheet"
              ></link>
              <div
                style={{
                  fontSize: "88px",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Rohith Potluri.
              </div>
              <link
                href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap"
                rel="stylesheet"
              ></link>
              <div
                style={{
                  fontSize: "21px",
                  fontFamily: "'Libre Baskerville', serif",
                }}
              >
                Dependable, Versatile Person & a Software Developer.
              </div>
            </div>
          </div>
        </div>

        <div>
          <Profile />{" "}
        </div>
      </div>
    </div>
  );
}

export default Header;
