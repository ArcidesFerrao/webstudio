"use client";

import { useState } from "react";

const ContactForm = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: any) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Form submitted! You can link this to Formspree or your API.");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email or WhatsApp"
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="What do you want built?"
        onChange={handleChange}
        required
      />
      <button type="submit" className="btn">
        Send Request
      </button>
    </form>
  );
};

export default ContactForm;
