import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Contact.css";

const Contact = () => {
  const notify = () =>
    toast.success("Thank you for your message. I will write back soon.");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fvxwb64",
        "template_4ilbfs4",
        form.current,
        "MYrhlfe73jTjg3yXG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="main_contact">
        <div className="contact_heading">
          <h1>Skills</h1>
          <h2>
            Here are some of my skills on which I have been working on for the{" "}
            <br />
            past 1 years.
          </h2>
        </div>
        <div className="contact_form">
          <h1>Email Me 🚀</h1>
          <form className="form_contect" ref={form} onSubmit={sendEmail}>
            <input type="gamil" placeholder="Your Email"></input>
            <input type="text" name="from_name" placeholder="Your Name"></input>
            <input type="text" name="subject" placeholder="Subject"></input>
            <input type="text" name="message" placeholder="Massage"></input>
            <input
              type="submit"
              value="Send"
              onClick={notify}
              className="btn2"
            />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              theme="light"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
