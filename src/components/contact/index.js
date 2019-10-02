import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <div>
      <h1 className="contact-form-title">Get in Touch!</h1>

      <div className="columns is-centered jd-contact">
        <div className="column is-three-fifths">
          <div className="field">
            <label className="label contactForm">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Name" />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="e.g. EddieWayne@gmail.com"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-text">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
