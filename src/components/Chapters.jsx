import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Chapters = () => {
  const [formdata, setFormdata] = useState({});
  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  return (
    <section className="topsection">
      <div className="Container">
        <h1>HOW TO STUDY SMART AND BOOST YOUR GP</h1>
        <div
          className="authorDiv"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <p>M.O Lawal</p>
          <p>H.O Lawal</p>
        </div>

        <div className="button button_top">
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
          <a href="https://selar.co/35nc" target="_blank" rel="noreferrer">
            <Button
              variant="contained"
              style={{ backgroundColor: "#342056", fontWeight: "700" }}
            >
              Get The eBook
            </Button>
          </a>

          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Button
              variant="contained"
              style={{ backgroundColor: "#fdb813", fontWeight: "700" }}
            >
              Back to Homepage
            </Button>
          </Link>
        </div>
        <article>
          <h3>CHAPTER ONE</h3>
          <h4>Knowing Your Learning Style</h4>
          <h3 className="last_H3">H.O Lawal</h3>
          <p>
            Learning makes up a student‘s entire life on campus. Either online
            or on-site, from a colleague or a lecturer, you must learn one thing
            or the other. It is inevitable! At the end of the semester, you will
            be tested, assessed, and graded on how well you have achieved from
            learning. Have you ever thought about your best way of learning
            things? Do you learn best by LISTENING, SEEING, or READING? Or do
            you understand better when you are allowed toDO it with your HANDS?
            Can you still REMEMBER that quote, verse, memory lane, a poem you
            can never forget, and how you assimilated it? Do you read it
            yourself or do you commit it to memory by listening to others? All
            of these are some of the determinants that influence learning styles
            and as a student, the need to identify your learning style is very
            crucial.{" "}
          </p>
          <h5>WHAT IS A LEARNING STYLE?</h5>
          <p>
            Learning style is a distinct way of learning. You need to note that
            learning effectively is accompanied by your unique learning style.
            Your style is natural and distinct in its way. You can achieve your
            learning goals with it. You and your friend might share different
            learning styles and still learn effectively if everyone should stick
            to his/her best learning style. To discover your best learning style
            you need to assess yourself with the VARK questionnaire.
          </p>
          <h5>WHAT IS VARK? </h5>
          <p>
            VARK is a self-report inventory developed by Neil Fleming in 1987 to
            help students learn more about their individual learning preferences
          </p>
          <p>V stands for VISUAL / SEEING </p>
          <p>A stands for AUDIO / LISTENING </p>
          <p>R stands for READING / WRITING </p>
          <p>K stands for KINESTHETIC / DOING</p>
          <h5>THE GOOD NEWS ABOUT VARK </h5>
          <p>
            You, as an individual have a preferred learning style, while some
            other people may have more than one learning style. Then, you should
            also note that one particular style is not better than the others
            and a preferred style does not mean you cannot learn in other
            styles. The good news is that knowing your best style of learning
            would make you a better learner and achieve more while receiving,
            processing, and retaining information. Now, you should be ready to
            identify your own unique and best way of learning.
          </p>
          <h5>ARE YOU A VISUAL, AUDIO, READ/WRITE or KINESTHETIC LEARNER?</h5>
          <p>
            Pick up a pen and paper and respond to this questionnaire. It has 16
            items with four options (V.A.R.K.).{" "}
          </p>
          <h6>
            Choose the answer which best explains your preference and circle the
            letter(s) (V, A, R, K) next to it. Please circle more than one if a
            single answer does not match your perceptions. Leave blank, any
            question that does not apply.
          </h6>
          <article className="Question_wrapper">
            <div className="Questions">
              <h5>QUESTION ONE</h5>
              <p className="first_para">
                I need to find the way to a shop that a friend has recommended.
                I would:
              </p>
              <p className="space-left">
                <input
                  type="radio"
                  value="v"
                  name="q1"
                  onChange={handleChange}
                />{" "}
                V) use a map.
                <br />{" "}
                <input
                  type="radio"
                  value="a"
                  name="q1"
                  onChange={handleChange}
                />
                A) ask my friend to tell me the directions.
                <br />
                <input
                  type="radio"
                  value="r"
                  name="q1"
                  onChange={handleChange}
                />{" "}
                R) write down the street directions I need to remember.
                <br />{" "}
                <input
                  type="radio"
                  value="k"
                  name="q1"
                  onChange={handleChange}
                />{" "}
                K) find out where the shop is about somewhere I know.
              </p>
            </div>
            <div className="Questions">
              <h5>QUESTION TWO</h5>
              <p className="first_para">
                A website has a video showing how to make a special graph or
                chart. A person is speaking, some lists and words describing
                what to do, and some diagrams. I would learn most from:
              </p>
              <p className="space-left">
                <input
                  type="radio"
                  value="v"
                  name="q2"
                  onChange={handleChange}
                />{" "}
                V) seeing the diagrams. <br />{" "}
                <input
                  type="radio"
                  value="a"
                  name="q2"
                  onChange={handleChange}
                />
                A) listening. <br />{" "}
                <input
                  type="radio"
                  value="r"
                  name="q2"
                  onChange={handleChange}
                />
                R) reading the words. <br />{" "}
                <input
                  type="radio"
                  value="k"
                  name="q2"
                  onChange={handleChange}
                />
                K) watching the actions.
              </p>
            </div>
            <div className="Questions">
              <h5>QUESTION THREE</h5>
              <p className="first_para">
                I want to find out more about a tour that I am going on. I
                would:
              </p>
              <p className="space-left">
                <input
                  type="radio"
                  value="v"
                  name="q3"
                  onChange={handleChange}
                />
                V) use a map and see where the places are.
                <br />{" "}
                <input
                  type="radio"
                  value="a"
                  name="q3"
                  onChange={handleChange}
                />
                A) talk with the person who planned the tour or others who are
                going on the tour.
                <br />{" "}
                <input
                  type="radio"
                  value="r"
                  name="q3"
                  onChange={handleChange}
                />{" "}
                R) read about the tour on the itinerary.
                <br />{" "}
                <input
                  type="radio"
                  value="k"
                  name="q3"
                  onChange={handleChange}
                />
                K) look at details about the highlights and activities on the
                tour.
              </p>
            </div>
            <div className="Questions">
              <h5>QUESTION FOUR</h5>
              <p className="first_para">
                When choosing a career or area of study, these are important for
                me:
              </p>
              <p className="space-left">
                <input type="radio" value="v" name="q4" /> V) use a map and see
                where the places are.
                <br /> <input type="radio" value="a" name="q4" />
                A) talk with the person who planned the tour or others who are
                going on the tour.
                <br /> <input type="radio" value="r" name="q4" />
                R) read about the tour on the itinerary.
                <br /> <input type="radio" value="v" name="q4" />
                K) look at details about the highlights and activities on the
                tour.
              </p>
            </div>
            <div className="Questions">
              <h5>QUESTION FIVE</h5>
              <p className="first_para">When I am learning I:</p>
              <p className="space-left">
                <input type="radio" value="v" name="q5" /> V) see patterns in
                things.
                <br /> <input type="radio" value="a" name="q5" /> A) like to
                talk things through. <br />{" "}
                <input type="radio" value="r" name="q5" />
                R) read books, articles and handouts.
                <br /> <input type="radio" value="k" name="q5" />
                K) use examples and applications.
              </p>
            </div>
            <div className="Questions">
              <h5>QUESTION SIX</h5>
              <p className="first_para">
                You want to save more money and to decide between a range of
                options. I would:
              </p>
              <p className="space-left">
                <input type="radio" value="v" name="q6" /> V) uses graphs
                showing different options for different periods. <br />{" "}
                <input type="radio" value="a" name="q6" /> A) talk with an
                expert about the options.
                <br /> <input type="radio" value="r" name="q6" />
                R) read a print brochure that describes the options in detail.
                <br /> <input type="radio" value="k" name="q6" /> K) considers
                examples of each option using my financial information.
              </p>
            </div>
            <div className="Questions">
              <h5>QUESTION SEVEN</h5>
              <p className="first_para">
                I want to learn how to play a new board game or card game. I
                would:{" "}
              </p>
              <p className="space-left">
                <input type="radio" value="v" name="q7" />
                V) use diagrams that explain the various stages, moves, and
                strategies in the game.
                <br /> <input type="radio" value="a" name="q7" />
                A) listen to somebody explaining it and ask questions.
                <br /> <input type="radio" value="r" name="q7" /> R) read the
                instructions.
                <br /> <input type="radio" value="k" name="q7" />
                K) watch others play the game before joining in.
              </p>
            </div>
            <div className="Questions">
              <h5>QUESTION EIGHT</h5>
              <p className="first_para">
                I have a problem with my heart. I would prefer that the doctor:{" "}
              </p>
              <p className="space-left">
                <input type="radio" value="v" name="q8" />
                V) showed me a diagram of what was wrong.
                <br /> <input type="radio" value="a" name="q8" /> A) described
                what was wrong.
                <br /> <input type="radio" value="r" name="q8" /> R) gave me
                something to read to explain what was wrong.
                <br /> <input type="radio" value="k" name="q8" /> K) used a
                plastic model to show me what was wrong.
              </p>
            </div>
            <div className="Questions">
              <h5>QUESTION NINE</h5>
              <p className="first_para">
                I want to learn to do something new on a computer. I would:{" "}
              </p>
              <p className="space-left">
                <input type="radio" value="v" name="q9" />
                V) follow the diagrams in a book.
                <br /> <input type="radio" value="a" name="q9" /> A) talk with
                people who know about the program.
                <br /> <input type="radio" value="r" name="q8" /> R) read the
                written instructions that came with the program.
                <br /> <input type="radio" value="k" name="q8" /> K) start using
                it and learn by trial and error.
              </p>
            </div>
            <div className="Questions">
              <h5>QUESTION TEN</h5>
              <p className="first_para">When using the Internet I like: </p>
              <p className="space-left">
                <input type="radio" value="v" name="q10" />
                V) interesting design and visual features.
                <br /> <input type="radio" value="a" name="q10" /> A) audio
                channels where I can listen to podcasts or interviews.
                <br /> <input type="radio" value="r" name="q10" /> R)
                interesting written descriptions, lists, and explanations.
                <br /> <input type="radio" value="k" name="q10" /> K) videos
                showing how to do or make things.
              </p>
            </div>
            <div className="Questions">
              <h5>QUESTION ELEVEN</h5>
              <p className="first_para">
                I want to learn about a new project. I would ask for:{" "}
              </p>
              <p className="space-left">
                <input type="radio" value="v" name="q11" />
                V) diagrams to show the project stages with charts of benefits
                and costs.
                <br /> <input type="radio" value="a" name="q11" /> A) an
                opportunity to discuss the project.
                <br /> <input type="radio" value="r" name="q11" /> R) a written
                report describing the main features of the project.
                <br /> <input type="radio" value="k" name="q11" /> K) examples
                where the project has been used successfully.
              </p>
            </div>
            <div className="Questions">
              <h5>QUESTION TWELVE</h5>
              <p className="first_para">
                I want to learn how to take better photos. I would:{" "}
              </p>
              <p className="space-left">
                <input type="radio" value="v" name="q12" /> V) use diagrams
                showing the camera and what each part does.
                <br /> <input type="radio" value="a" name="q12" /> A) ask
                questions and talk about the camera and its features.
                <br /> <input type="radio" value="r" name="q12" />
                R) use the written instructions about what to do.
                <br /> <input type="radio" value="k" name="q12" /> K) use
                examples of good and poor photos showing how to improve them.
              </p>
            </div>
            <div className="Questions">
              <h5>QUESTION THIRTEEN</h5>
              <p className="first_para">
                I prefer a presenter or a teacher who uses:{" "}
              </p>
              <p className="space-left">
                <input type="radio" value="v" name="q13" />
                V) diagrams, charts, maps, or graphs.
                <br /> <input type="radio" value="a" name="q13" />
                A) question and answer, talk, group discussion, or guest
                speakers.
                <br /> <input type="radio" value="r" name="q13" />
                R) handouts, books, or readings.
                <br /> <input type="radio" value="k" name="q13" />
                K) demonstrations, models, or practical sessions.
              </p>
            </div>
            <div className="Questions">
              <h5>QUESTION FOURTEEN</h5>
              <p className="first_para">
                I have finished a competition or test and I would like some
                feedback. I would like to have feedback:
              </p>
              <p className="space-left">
                <input type="radio" value="v" name="q14" />
                V) using graphs showing what I achieved.
                <br /> <input type="radio" value="a" name="q14" />
                A) from somebody who talks it through with me.
                <br /> <input type="radio" value="r" name="q14" />
                R) using a written description of my results.
                <br /> <input type="radio" value="k" name="q14" />
                K) using examples from what I have done.
              </p>
            </div>
            <div className="Questions">
              <h5>QUESTION FIFTEEN</h5>
              <p className="first_para">
                I want to find out about a house or an apartment. Before
                visiting it I would want:
              </p>
              <p className="space-left">
                <input type="radio" value="v" name="q15" />
                V) a plan showing the rooms and a map of the area.
                <br /> <input type="radio" value="a" name="q15" />
                A) a discussion with the owner.
                <br /> <input type="radio" value="r" name="q15" />
                R) a printed description of the rooms and features.
                <br /> <input type="radio" value="k" name="q15" />
                K) to view a video of the property.
              </p>
            </div>
            <div className="Questions">
              <h5>QUESTION SIXTEEN</h5>
              <p>
                I want to assemble a wooden table that came in parts (kitset). I
                would learn best from:
              </p>
              <p className="space-left">
                <input type="radio" value="v" name="q16" />
                V) diagrams showing each stage of the assembly.
                <br /> <input type="radio" value="a" name="q16" /> A) advice
                from someone who has done it before.
                <br /> <input type="radio" value="r" name="q16" /> R) written
                instructions that came with the parts for the table.
                <br /> <input type="radio" value="k" name="q16" />
                K) watching a video of a person assembling a similar table.
              </p>
            </div>
            {/* <h6>
              INPUT the total number of each option you have selected and write
              them in the VARK boxes below.
            </h6> */}
            {/* <div className="input_Div">
              <label>
                <h3>V</h3>
                <input type="text" />
              </label>
              <label>
                <h3>A</h3>
                <input type="text" />
              </label>
              <label>
                <h3>R</h3>
                <input type="text" />
              </label>
              <label>
                <h3>K</h3>
                <input type="text" />
              </label>
            </div> */}
          </article>
          <div className="button">
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
            <a href="https://selar.co/35nc" target="_blank" rel="noreferrer">
              <Button
                variant="contained"
                style={{ backgroundColor: "#342056", fontWeight: "700" }}
              >
                Get The eBook
              </Button>
            </a>

            <Link style={{ textDecoration: "none" }} to={"/"}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#fdb813", fontWeight: "700" }}
              >
                Back to Homepage
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Chapters;
