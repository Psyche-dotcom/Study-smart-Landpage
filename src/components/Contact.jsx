import { CallRounded, WhatsappRounded } from "@mui/icons-material";
import React from "react";
import Form from "./form";

const Contact = () => {
  return (
    <section className="Contact">
      <div className="Container Contact_container">
        <h4>Contact Us</h4>
        <div className="formDiv">
          <Form />

          <section className="call">
            <img
              src="./images/doublebook.png"
              alt="book"
              className="doublebook"
            />
            <div>
              <a href="https://wa.link/znweum">
                <WhatsappRounded color="#24c039" />
                Whatsapp message
              </a>
              <a href="tel:+2349053932070">
                <CallRounded color="#342056" /> Click to Call{" "}
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Contact;
