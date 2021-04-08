import React from "react";

function Awards() {
  return (
    <div className="awards">
      <div>
        <div className="h4 h2" id="awards" style={{ textAlign: "center" }}>
          Awards
        </div>
        <div className="h2" style={{ textAlign: "center" }}>
          WHERE I SHINE
        </div>
        <div className="h3" style={{ fontSize: "18px" }}>
          Best Outgoing Student of the Year 2015-19<td></td>
          Best Rated Employee at TCS
        </div>
      </div>
      <div>
        <div className="h4 h2" style={{ textAlign: "center" }}>
          Interests
        </div>
        <div className="h2" style={{ textAlign: "center" }}>
          OUT OF OFFICE
        </div>
        <div className="awards-minigrid">
          <div className="h3" style={{ fontSize: "18px" }}>
            Writing<td></td>
            Travel<td></td>
            Cooking
          </div>
          <div className="h3" style={{ fontSize: "18px" }}>
            Watching Web Series<td></td>
            Social Events<td></td>
            Organizing Tech. Workshops
          </div>
        </div>
      </div>
      <div>
        <div className="h4 h2" style={{ textAlign: "center" }}>
          Certifications
        </div>
        <div className="h2" style={{ textAlign: "center" }}>
          WHERE I PROVED
        </div>
        <div className="h3" style={{ fontSize: "18px" }}>
          PEGA 7.2 Certified Solutions Architect<td></td>
          AWS Cloud Architect - Udemy<td></td>
          Python Developer - Udemy<td></td>
          Data Science - Udemy
        </div>
      </div>
    </div>
  );
}

export default Awards;
