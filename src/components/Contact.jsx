import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({isDarkMode}) => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_06g0kl4",
        "template_oi3sngf",
        form.current,
        "ENMdmqpl2f8jJnf9O"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setShowAlert(true);

          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div name="Contact" className="w-full lg:px-10 xl:px-40">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className={`pb-2 rounded-2xl p-6 ${
            isDarkMode ? "bg-blue" : "bg-lightblue"
          }`}>
          <div className="w-auto h-auto flex items-center justify-center">
            <h2 className="text-4xl font-bold border-b-4 border-orange inline">
              Contact
            </h2>
          </div>
          <p className="py-6 w-auto h-auto flex items-center justify-center">
            Submit the form below to get in touch
          </p>
          <div className="flex justify-center items-center">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name..."
                required
                className="p-2 bg-transparent rounded-md border-2 focus:outline-none"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email..."
                required
                className="p-2 my-4 bg-transparent rounded-md border-2 focus:outline-none"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              />
              <textarea
                name="message"
                rows="10"
                placeholder="Enter your message..."
                required
                className="p-4 bg-transparent rounded-md border-2 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="rounded-md bg-brown px-6 py-3 my-8 mx-auto flex items-center hover:scale-110 duration-300"
              >
                Send!
              </button>
            </form>

            <div
              className={`fixed top-24 left-50% right-50% bg-white border-t-4 border-brown rounded-md text-blue px-4 py-3 animate-bounce shadow-md ${
                showAlert ? "opacity-100" : "hidden -top-full"
              }`}
              role="alert"
            >
              <div className="flex">
                <div className="py-3 pr-2">
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M20 16v-6h2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h8v2H8v12h12m-9.09-8.92L14 10.17l6.59-6.59L22 5l-8 8l-4.5-4.5l1.41-1.42M16 20v2H4a2 2 0 0 1-2-2V7h2v13h12Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Message sent!</p>
                  <p className="text-sm">Thank you for contacting me.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
