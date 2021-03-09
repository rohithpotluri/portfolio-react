import React from "react";
import SocialMedia from "../socialmedia/socialmedia";
import Downloadresume from "../download/downloadresume.js";

function ProfileTile() {
  return (
    <div className="profileTile">
      <div>
        <img
          className="image"
          src="https://s3-ap-southeast-2.amazonaws.com/rohithpotluri.com-resources/PortfolioPicture.jpg"
        />
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&display=swap"
        rel="stylesheet"
      ></link>
      <div>
        <div
          style={{ fontSize: "29px", fontFamily: "'Playfair Display', serif" }}
        >
          {" "}
          Rohith Potluri
        </div>
        <br></br>
        <div>Bachelors from BVRIT,</div>
        <div>Systems Engineer at</div>
        <div>Tata Consultancy Services.</div>
      </div>

      <div>
        <a
          href="mailto:rohithpotluri234@gmail.com"
          target="_blank"
          style={{ color: "white" }}
        >
          ✉rohithpotluri234@gmail.com
        </a>
      </div>

      <div>
        <div>
          <SocialMedia />
          <Downloadresume />
        </div>
      </div>
    </div>
  );
}

export default ProfileTile;
