import React from "react";
import ChildFooter from "../../Home/ChildFooter/ChildFooter";
import "./Contact.css";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_69853he",
        "template_dcqr9y1",
        form.current,
        "qmh37_Ef-pkwotPO1"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("You query is sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...Please try again", error);
        }
      );
  };
  return (
    <>
      <div className="contact-container">
        <div className="contact-title">
          <h1>Contact Me</h1>
        </div>

        <div className="container">
          <div className="content">
            <div className="left-side">
              <div className="address details">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <div className="topic">Address</div>
                <div className="text-one">Sangamner, MH</div>
                <div className="text-two">India</div>
              </div>
              <div className="phone details">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <div className="topic">Phone</div>
                <div className="text-one">+91 909-608-6603</div>
              </div>
              <div className="email details">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <div className="topic">Email</div>
                <div className="text-one">mandulepp123@gmail.com</div>
              </div>
            </div>
            <div className="right-side">
              <div className="topic-text">Any Query? Send me a message</div>

              <form ref={form} onSubmit={sendEmail}>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    id="name"
                  ></input>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                  ></input>
                </div>

                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Enter your subject"
                    name="subject"
                    id="subject"
                  ></input>
                </div>

                <div className="input-box message-box">
                  <input
                    type="textarea"
                    placeholder="Enter your message"
                    name="message"
                    id="message"
                  ></input>
                </div>

                <button type="submit" className="submitbtn">
                  Send Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ChildFooter />
    </>
  );
};

export default Contact;
