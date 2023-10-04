import React, { useState } from "react";
import imgContact from "../../images/contact-us.jpg";
import "./Contact.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact({ lang }) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !subject || !message) {
      return toast.error("please fill email,subject,message");
    }
    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:8000/api/email", {
        email,
        subject,
        message,
      });

      setLoading(false);
      toast.success("sent message successfully!");
    } catch (error) {
      setLoading(false);
      toast.error(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };
  return (
    <>
      {lang === "eng" ? (
        <div className="container contact" id="contact">
          <h2>Contact Us</h2>
          <hr />
          <div className="contact-container container">
            <div className="form-contact-container">
              <form className="form" onSubmit={submitHandler}>
                <h3 className="title-form">Comments And Your Message</h3>

                <input
                  name="email"
                  type="email"
                  placeholder="inter email :"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  name="subject"
                  type="text"
                  placeholder="inter subject :"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  name="messages"
                  type="text"
                  value={message}
                  placeholder="inter your message:"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button disabled={loading} type="submit">
                  {loading ? "sending..." : "send"}
                </button>
              </form>
              <ToastContainer position="bottom-left" limit={1} />
            </div>
            <div className="img-contact-container ">
              <img src={imgContact} alt="img-contact" />
            </div>
          </div>
        </div>
      ) : (
        <div className="container contact" id="contact">
          <h2>تماس با من</h2>
          <hr />
          <div className="contact-container container">
            <div className="form-contact-container">
              <form className="form" onSubmit={submitHandler}>
                <h3 className="title-form">نظرات و پیام های شما</h3>

                <input
                  name="email"
                  type="email"
                  placeholder="ایمیل را وارد کنید"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  name="subject"
                  type="text"
                  placeholder="موضوع را وارد کنید"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  name="messages"
                  type="text"
                  value={message}
                  placeholder="پیام خود را وارد کنید"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button disabled={loading} type="submit">
                  {loading ? "در حال ارسال " : "ارسال"}
                </button>
              </form>
              <ToastContainer position="bottom-left" limit={1} />
            </div>
            <div className="img-contact-container ">
              <img src={imgContact} alt="img-contact" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
