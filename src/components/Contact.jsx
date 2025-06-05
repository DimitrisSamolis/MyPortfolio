import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";

const Contact = ({ isDarkMode }) => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_meitlgn",
        "template_oi3sngf",
        form.current,
        "AXXsH9KutkNyw74kb"
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

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      name="Contact"
      className={`w-full py-32 lg:px-10 xl:px-40 ${inView ? "active" : ""}`}
    >
      <div
        className={`max-w-screen-lg mx-auto flex flex-col p-4 justify-center slide-in ${
          inView ? "active" : ""
        }`}
      >
        <div className={`rounded-3xl p-8 shadow-lg ${inView ? "active" : ""}`}>
          <div className=" pb-8">
            <h2 className="text-4xl font-bold border-b-4 border-orange pb-2 inline-block">
              Contact Me
            </h2>
            <p className="mt-4 text-lg ">
              Feel free to drop a message or inquiry using the form below. I’ll
              get back to you as soon as possible!
            </p>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-4 text-black border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-4 text-black border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="p-4 text-black border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange"
            ></textarea>
            <button
              type="submit"
              className="bg-orange text-black py-3 rounded-md font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </form>

          {showAlert && (
            <div
              className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Message Sent!</strong>
              <span className="block sm:inline">
                {" "}
                Thank you for reaching out. I’ll get back to you soon.
              </span>
              <button
                onClick={() => setShowAlert(false)}
                className="absolute top-0 right-0 px-4 py-3"
              >
                <svg
                  className="fill-current text-green-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.293 4.293a1 1 0 0 1 1.414 0L12 7.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 9l4.293 4.293a1 1 0 0 1-1.414 1.414L12 10.828l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414z"></path>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
