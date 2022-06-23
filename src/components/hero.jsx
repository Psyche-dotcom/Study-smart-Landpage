import React from "react";
import { Button } from "@mui/material";

const Hero = () => {
  return (
    <section className="main">
      <div className="Container">
        <div className="main-hero ">
          <h1>
            HOW TO <br /> <span>STUDY</span> SMART
            <br />
            AND <span>BOOST</span> YOUR GP
          </h1>
          <div
            style={{ display: "flex", gap: "10px", marginBottom: "2em" }}
            className="author_name"
          >
            <p>M.O Lawal</p>
            <p>H.O Lawal</p>
          </div>
          <img
            src="./images/Untitled-4.png"
            alt="book"
            className="mobile-img"
          />
          <div className="button">
            <a href="https://selar.co/35nc" target="_blank" rel="noreferrer">
              <Button
                variant="contained"
                style={{ backgroundColor: "#342056", fontWeight: "700" }}
              >
                Get The eBook
              </Button>
            </a>

            <a
              href="http://www.amazon.com/dp/B09ZLGJJF6/ref=cm_sw_r_awdo_C6F3C2M4TWEVQFT868TH"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="contained"
                style={{ backgroundColor: "#fdb813", fontWeight: "700" }}
              >
                Get The HardCopy
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
