"use client";

// import { useState } from "react";

const ContactForm = () => {
  // const [data, setData] = useState({ name: "", email: "", message: "" });

  // const handleChange = (e: any) =>
  //   setData({ ...data, [e.target.name]: e.target.value });

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   alert("Form submitted! You can link this to Formspree or your API.");
  // };

  return (
    <form
      // onSubmit={handleSubmit}
      className="contact-form flex flex-col items-center gap-5"
    >
      <h2 className="text-4xl font-bold bg-clip-text ">Contact Me</h2>

      <p className="max-w-md text-center">Ready to build something?</p>
      <p className="max-w-md text-center font-extralight">
        Let’s talk about your project. I usually respond in less than 24 hours.
      </p>
      <div className="flex flex-col gap-5">
        <input
          name="name"
          placeholder="Your Name"
          // onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email or WhatsApp"
          // onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="What do you want built?"
          // onChange={handleChange}
          required
        />
        <button type="submit" className="btn">
          Send Request
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
