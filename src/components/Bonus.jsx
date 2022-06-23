import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Bonus = () => {
  return (
    <section className="Bonus">
      <div className="Container">
        <div className="Bonus_main">
          <div className="Bonus_main_info">
            <h4>What is Inside?</h4>
            <h5>
              Read from some of the chapters in the book "How to study and boost
              your GP" for Free!
            </h5>
            <p>
              Yes, for free! We have selected three chapters to give you a taste
              of what is contained in the book, pick one and learn how to study
              and boost your GP.
            </p>
          </div>
          <div className="Bonus_main_card">
            <Link to={"/learning-style"} style={{ textDecoration: "none" }}>
              <div className="card">
                <p className="card_chapter">Chapter 1</p>
                <h5 className="card_title">Knowing Your Learning Style</h5>
              </div>
            </Link>
            <Link to={"/Memory"} style={{ textDecoration: "none" }}>
              <div className="card">
                <p className="card_chapter">Chapter 5</p>
                <h5 className="card_title">Improving Your Memory</h5>
              </div>
            </Link>
            <Link to={"/cgpa"} style={{ textDecoration: "none" }}>
              <div className="card">
                <p className="card_chapter">Chapter 12</p>
                <h5 className="card_title">Calculating Your CGPA</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="button">
          <a href="https://selar.co/35nc" target="_blank" rel="noreferrer">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#eff0fa",
                color: "#342056",
                fontWeight: "700",
              }}
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
    </section>
  );
};

export default Bonus;
