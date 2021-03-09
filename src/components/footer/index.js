import React, { useState } from "react";
import Socialmedia from "../socialmedia/socialmedia.js";
import Download from "../download/downloadresume.js";
import Scroll from "../scroll/Scroll.js";
import axios from "axios";

function Footer() {
  const [comments, setComments] = useState();
  const [email, setemail] = useState();

  const submitDetails = async (event) => {
    event.preventDefault();

    console.log(comments);
    console.log(email);

    await axios
      .post("http://13.236.3.59:5000", {
        receiver: email,
        comment: comments,
      })
      .then((response) => {
        console.log(response.data);
        setComments("");
        setemail("");

        alert("Successfully Sent the email");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to send an email");
      });
  };

  return (
    <div>
      <div className="footer-color">
        <div className="f1">
          I'd love to hear<br></br>from you.
        </div>
        <div>
          <div class="comment_box">
            <form action="" method="" onSubmit={submitDetails}>
              <p>
                <textarea
                  name="comments"
                  rows="4"
                  cols="35"
                  value={comments}
                  placeholder="Comments..."
                  onChange={(event) => {
                    setComments(event.target.value);
                  }}
                ></textarea>
                <br></br>
                <textarea
                  name="email"
                  rows="2"
                  cols="35"
                  value={email}
                  placeholder="Email Id"
                  onChange={(event) => {
                    setemail(event.target.value);
                  }}
                ></textarea>
                <br></br>
                <button type="submit">Submit</button>
              </p>
            </form>
          </div>

          {/*<div className="submit">submit</div>*/}
        </div>
        <div>
          <Socialmedia />
          <Download />
        </div>
        <div>
          <Scroll />
        </div>
      </div>
    </div>
  );
}

export default Footer;
