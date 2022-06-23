import React from "react";
import { Button } from "@mui/material";

const Why = () => {
  return (
    <section className="Why">
      <div className="Container">
        <article className="Reason">
          <h4>Why should I read it?</h4>
          <div className="Reason_card">
            <div className="Reason_card_design">
              <div className="card">
                <h3>1</h3>
                <h5>Academic Success</h5>
                <p>
                  Everything in this book is basically all that a student needs
                  to succeed in school even though the entry of all the topics
                  raised focused more on undergraduates.
                </p>
              </div>
              <div className="card">
                <h3>2</h3>
                <h5>Reading and Preparing for Examination</h5>
                <p>
                  The book touched on virtually all areas students neglects as
                  regards reading and preparation for exams and the like. And
                  also, the authors align how exercise and engagement in
                  physical activities help the brain and one's mental health
                  which is a key aspect of academic pursuit.
                </p>
              </div>
            </div>
            <div className="Reason_card_design">
              <div className="card">
                <h3>3</h3>
                <h5>Stress Management and Learning Styles</h5>
                <p>
                  The book distinguishes the types of learners. Be it visual,
                  audio, read and write or kinesthetic. stress management,
                  handling procrastination, and calculating CGPA are discussed
                  extensively in the book.
                </p>
              </div>
              <div className="card">
                <h3>4</h3>
                <h5>Learn from Best Student Experiences</h5>
                <p>
                  Meet scholars and the best students from various universities
                  who sincerely share their experiences, how they live their
                  academic lives; do's and don'ts for reaching academic
                  excellence.
                </p>
              </div>
            </div>
          </div>
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
        </article>
      </div>
    </section>
  );
};

export default Why;
