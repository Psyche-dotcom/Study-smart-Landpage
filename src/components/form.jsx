import React from "react";
import { Button } from "@mui/material";

const Form = () => {
  return (
    <>
      <form className="form" method="POST">
        <input type="hidden" name="form-name" value="contact" />

        <div className="form_head">
          <p>
            <input type="text" name="name" placeholder="Your Name" required />
          </p>
          <p>
            <input type="text" name="email" placeholder="Your Email" required />
          </p>
        </div>

        <p>
          <textarea
            name="message"
            className="textarea"
            placeholder="Plese enter your Message here"
            required
          />
        </p>
        <p>
          <Button
            variant="contained"
            style={{ backgroundColor: "#342056", fontWeight: "700" }}
            type="submit"
          >
            Send
          </Button>
        </p>
      </form>
    </>
  );
};

export default Form;
