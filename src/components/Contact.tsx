import React, { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('msg') as HTMLTextAreaElement).value;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    // Further processing like sending data to an API or backend
    alert("Message sent successfully!");
  };

  return (
    <div id="contact" className="pt-32 container">
      <div className="grid md:grid-cols-2 gap-10 md:gap-6">
        {/* Left side: Contact Info */}
        <div className="space-y-8">
          <h2 className="text-5xl" data-aos="zoom-in-up">
            Get in touch
          </h2>
          <p className="text-gray-600 text-[18px] pt-2" data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting
            the form.
          </p>

          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <AiOutlineMail size={30} /> <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>
          </div>
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <BsTelephone size={30} /> <a href="tel:+920210000000">+92 (021) 000-0000</a>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <div className="space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-1" data-aos="zoom-in-up">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="h-[40px] bg-transparent border border-accent"
                id="name"
                aria-label="Your name"
                required
              />
            </div>
            <div className="flex flex-col gap-1" data-aos="zoom-in-up">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="h-[40px] bg-transparent border border-accent"
                id="email"
                aria-label="Your email"
                required
              />
            </div>
            <div className="flex flex-col gap-1" data-aos="zoom-in-up">
              <label htmlFor="msg">Message</label>
              <textarea
                className="bg-transparent border border-accent min-h-[100px] resize-none"
                id="msg"
                aria-label="Your message"
                rows={8}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-accent p-2 px-6 hover:bg-accent-dark transition duration-300"
              data-aos="zoom-in-up"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
