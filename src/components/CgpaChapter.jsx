import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CgpaChapter = () => {
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
        <article className="Question_wrapper">
          <h3>CHAPTER TWELVE </h3>
          <h4>Calculating Your CGPA</h4>
          <h3 className="last_H3">H.O Lawal</h3>
          <p>
            Knowing how to calculate my CGPA is one thing that helped me as a
            student while in the university. How? I was able to track my results
            and know why I need to improve and work harder. It also helps in
            setting <span> SMART</span> (Specific, Measurable, Achievable,
            Realistic, Time-bound) goals which in the end you know whether you
            have achieved them or not. For me, at the beginning of every
            semester or session, I did forecast my results which I would work on
            and pray over it till the end of my final exam. It worked for me a
            lot! It will make you serious and sends you a reminder. You can try
            it and thank me later. Write out your grades plan and look at them
            every morning before leaving home.{" "}
            <span>You‟ll see the miracle!</span>. Your CGPA is the sole reason
            for being in school. It is what determines whether you‘re moving to
            the next level or class or repeating the level.
          </p>
          <p>
            Your CGPA is like an egg that must be protected and nurtured. This
            is because, at the end of your program, grade points for every
            session will be used to determine your class of degree, whether it‘s
            a first, second, third class, or even pass. Before talking about
            CGPA, let me expose you to what the classes of degree are:
          </p>
          <p>
            • First Class <br /> • Second Class (Upper Division) <br /> • Second
            Class (Lower Division) <br /> • Third Class <br /> • Pass
          </p>

          <p>
            <span> First-Class Grade</span> is what every ambitious student
            would hope and work for. It is attainable! Thousands of people have
            their certificates with this class of degree. It requires
            dedication, smart study, and prayers. It‟s not impossible!{" "}
          </p>

          <p>
            <span> Second Class</span> is divided into two divisions:{" "}
            <span>Upper and Lower Divisions</span>. This is the second class of
            degrees if you wish to further your studies at home or abroad. They
            are the minimum acceptable grades you needed for a master‘s or any
            postgraduate study in most universities of the world. It is highly
            recommended you struggle not lesser than this grade.
          </p>
          <p>Other grades are Third class and Pass</p>

          <h6>WHAT IS GPA/CGPA? </h6>

          <p>
            CGPA means Cumulative Grade Point Average. Your GPA for the first
            will be added to that of your second semester to account for CGPA.
            Cumulative Grade Point Average (CGPA) is an assessment tool used to
            evaluate your academic performance. Your CGPA is calculated by
            dividing the sum of the grade points earned by the total credit
            value of courses you have offered in both semesters. Grade Point
            (GP) is classified into letter Grades (from A, B, C, D, E, to F)
            which represent a range of scores or marks a student can obtain. A
            particular grade point is assigned to these grades. See below:
          </p>
          <table>
            <tr>
              <th>Marks/Score </th>
              <th>Letter Grade</th>
              <th>Grade Points (GP) </th>
            </tr>
            <tr>
              <td>70 - 100</td>
              <td>A</td>
              <td>5.00 </td>
            </tr>
            <tr>
              <td>60 - 69</td>
              <td>B</td>
              <td>4.00 </td>
            </tr>
            <tr>
              <td>50 - 59</td>
              <td>C</td>
              <td>3.00 </td>
            </tr>
            <tr>
              <td>45 - 49</td>
              <td>D</td>
              <td>2.00 </td>
            </tr>
            <tr>
              <td>40 - 44</td>
              <td>E</td>
              <td>1.00 </td>
            </tr>
            <tr>
              <td>00 - 39</td>
              <td>F</td>
              <td>0.00 </td>
            </tr>
          </table>
          <p>
            The above are the obtainable scores and grades you can attain at the
            end of your semester. It is the accumulation of your test score,
            project work, assignments, presentations, practicals, lab
            coursework, etc.
          </p>
          <h6>NOW YOUR LAST SESSION RESULTS ARE COMPLETELY RELEASED!</h6>
          <h5>HOW DO I CALCULATE MY CGPA? </h5>
          <p>
            You should start by calculating each semester‘s results. If in a
            session you have two semesters, calculate the first and second
            semesters separately. This is called GPA while CGPA is cumulative of
            both semesters. Let‘s say this is my sessional results for all the
            courses offered in the practical first and second semesters.
          </p>
          <h5>Result Image here noted</h5>
          <h6>TO CALCULATE THE CGPA FOR THESE RESULTS, FOLLOW THESE STEPS:</h6>
          <h6>HARMATTAN SEMESTER </h6>
          <h5>STEP ONE (MULTIPLY COURSE UNIT BY GRADE POINT) </h5>
          <p>
            <span>
              UNIT X GP (A: 5, B: 4, C: 3, D: 2, E: 1in, F: the 0) <br />
              AED 311: 2 X 5 = 10 <br />
              EDU 311: 2 X 5 = 10 <br />
              EDU 313: 2 X 3 = 6 <br />
              EDU 315: 2 X 5 = 10 <br />
              ENG 326: 2 X 4 = 8 <br />
              ENG 327: 2 X 4 = 8 <br />
              ENG 329: 2 X 5 = 10 <br />
              GNS 311: 2 X 3 = 6 <br />
              GSE: 302: 2 X 5 = 10 <br />
              TOTAL CREDIT POINTS (TCP) = 78 <br />
              TOTAL NUMBER OF UNITS (TNU) = 18
            </span>
          </p>
          <h6>STEP TWO (DIVIDE TCP BY TNU = GPA): </h6>

          <p>
            {" "}
            <span> TCP/TNU = 78/18 = 4.3</span>{" "}
          </p>
          <p>The GPA for the Harmattan semester is 4.3 </p>
          <h6>RAIN SEMESTER </h6>
          <p>
            <span>
              UNIT X GP (A: 5, B: 4, C: 3, D: 2, E: 1, F: 0) <br />
              EDU 312: 2 X 5 = 10 <br />
              EDU 315: 2 X 5 = 10 <br />
              EDU 316: 2 X 3 = 6 <br />
              ENG 304: 2 X 5 = 10 <br />
              ENG 326: 2 X 4 = 8 <br />
              ENG 330: 2 X 4 = 8 <br />
              ENG 334: 2 X 5 = 10 <br />
              ENG 336: 2 X 2 = 4 <br />
              GNE: 312: 2 X 5 = 5 <br />
              TOTAL CREDIT POINTS (TCP) = 80 <br />
              TOTAL NUMBER OF UNITS (TNU) = 18{" "}
            </span>
          </p>
          <h6>STEP TWO (DIVIDE TCP BY TNU = GPA): </h6>
          <p>
            {" "}
            <span> TCP/TNU = 78/18 = 4.4. </span> Therefore, GPA for Rain
            semester is 4.4 The next thing to do is to calculate the cumulative
            grade point average (CGPA) for the whole session. To do this, use
            this formula:
          </p>
          <p>
            Total Credit Point for both semesters DIVIDED BY total Number of
            Units for both semesters{" "}
          </p>
          <p>
            <span>TCP</span> = 78+80 = 158 <br /> <span>TNU</span> = 18+18 = 36
          </p>
          <h6>TO DETERMINE YOUR CLASS OF DEGREE WITH YOUR CGPA </h6>
          <table>
            <tr>
              <th>S/N</th>
              <th>Class of Honour</th>
              <th>CGPA Score</th>
            </tr>
            <tr>
              <td>1</td>
              <td>First Class</td>
              <td>4.50 - 5.00</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Second Class(Upper Division)</td>
              <td>3.50 - 4.49</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Second Class(Lower Division)</td>
              <td>2.50 - 3.49</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Third Class</td>
              <td>2.00 - 2.49</td>
            </tr>
          </table>
          <p>
            Now, as you can see, the above CGPA (4.38) falls under Second Class
            (Upper Division).{" "}
          </p>
          <article>
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
        </article>
      </div>
    </section>
  );
};

export default CgpaChapter;
