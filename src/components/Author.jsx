import React from "react";
import { Button } from "@mui/material";

const Author = () => {
  return (
    <section className="Author">
      <div className="Container Author_container">
        <h4>Meet The Author</h4>
        <div className="Author_flex">
          <article className="Author_flex_width">
            <p>
              <img src="./images/H.O.jpg" alt="H.O. Lawal" className="round" />
              H.O LAWAL
              <br />
              Hammed Olalekan Lawal is a graduate of English and Education from
              the University of Ilorin, Nigeria. He graduated as the best
              student for the 2019/2020 academic session. During his
              undergraduate days, he enjoyed the University of Ilorin
              Scholarship Awards for three consecutive year. He was also the
              winner of the 2019 UNILORIN TEC Business Proposal Writing
              Competition. Mr. H.O Lawal has won several awards both locally and
              Internationally. He won the British Council's Teaching English
              Africa Competition in March 2022. He is an English educator, tech
              enthusiast, writer, researcher and bussiness enterprenuer. His
              first book titled "How to Study Smart and Boost your GP" has
              gained him so much recongnition.
            </p>
          </article>
          <article className="Author_flex_width">
            <p>
              <img
                src="./images/muslaw.jpeg"
                alt="author_h.o"
                className="round"
              />
              M.O LAWAL
              <br />
              Mustapha O. Lawal is a freelance writer and content creator. He
              graduated from the Department of Human Kinetics Education,
              University of Ilorin, Nigeria as the best student for the
              2019/2020 academic session. During his undergraduate, he won
              University of Ilorin Scholarship Awards for three consecutive
              years. Not only that, he also enjoyed the Federal Scholarship
              Board Awards for two years. He was also honoured the Student Union
              Scholar of the year. Over time, Mustapha has established himself
              as a Young Change-Maker with a flair for excellence and equipping
              others with the necessary skils needed to attain greater height.
              He is an ardent believer in doing well whatever is worth doing at
              all. He looks forrward to helping students gain the necessary
              information to attain excellence in their careers with his input
              in the book "How to Study Smart and Boost your GP".
            </p>
          </article>
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

export default Author;
