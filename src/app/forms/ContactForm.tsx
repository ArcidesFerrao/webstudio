"use client";

const ContactForm = () => {
  return (
    <form
      id="contact"
      action="https://formsubmit.co/cidesferrao@gmail.com"
      method="POST"
      className="contact-form flex flex-col items-center gap-5"
    >
      <h2 className="text-4xl font-bold bg-clip-text ">Contact Me</h2>

      <p className="max-w-md text-center">Ready to build something?</p>
      <p className="max-w-md text-center font-extralight">
        Let’s talk about your project. I usually respond in less than 24 hours.
      </p>
      <div className="flex flex-col gap-5">
        <input name="name" placeholder="Your Name" required />
        <input name="email" type="email" placeholder="Your Email" required />
        <textarea
          name="message"
          placeholder="What do you want built?"
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
