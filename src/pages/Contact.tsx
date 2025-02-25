import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";
import { useEffect } from "react";

export default function Contact() {
  // Add the same animation effect from About page
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavBar />
      {/* <div className="mt-20 min-h-screen bg-neutral-50"> */}
      {/* Hero Banner - Matching About page banner height and style */}
      <div className="mt-20 min-h-screen bg-neutral-50">
        {/* Hero Banner - Matching About page banner height and style */}
        <div className="relative flex h-80 items-center justify-center overflow-hidden bg-teal-400 text-white">
          <img
            src="src/assets/contact-header.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-500 opacity-20"></div>
          <div className="absolute right-0 bottom-0"></div>
          <h1 className="scroll-animate relative z-10 text-5xl font-bold md:text-6xl">
            Contact Us
          </h1>
        </div>
        {/* </div> */}

        {/* Contact Form Section */}
        <div className="relative bg-neutral-50 px-4 py-16 md:px-10 md:py-20 lg:px-20 xl:px-52">
          <div className="absolute top-10 right-0 opacity-5">
            <svg
              className="h-80 w-80 text-teal-600"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <rect
                x="25"
                y="25"
                width="50"
                height="50"
                transform="rotate(45 50 50)"
              />
            </svg>
          </div>

          <h2 className="scroll-animate text-center text-4xl font-bold text-neutral-800 md:text-5xl">
            Send Us a Message
          </h2>
          <p className="scroll-animate mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-neutral-700 md:text-2xl md:leading-10">
            Have a question? Contact us using the form below, and we'll get back
            to you soon!
          </p>

          <div className="relative z-10 mx-auto mt-12 max-w-3xl">
            <form className="space-y-6">
              {/* Email Button */}
              <a
                href="mailto:communicare.med@gmail.com"
                className="scroll-animate block"
              >
                <button
                  type="button"
                  className="flex w-full items-center gap-4 rounded-2xl border border-teal-400 p-5 text-left text-neutral-800 shadow-sm transition duration-150 hover:bg-teal-50 hover:shadow-md"
                >
                  <img
                    src="src/assets/email-dark.png"
                    alt="email icon"
                    className="h-8 w-8"
                  />
                  <div>
                    <p className="text-sm font-medium text-teal-600">
                      EMAIL US AT
                    </p>
                    <p className="text-lg font-semibold">
                      communicare.med@gmail.com
                    </p>
                  </div>
                </button>
              </a>

              {/* Input Fields */}
              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="scroll-animate w-full rounded-2xl border border-gray-300 p-4 text-lg placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="scroll-animate w-full rounded-2xl border border-gray-300 p-4 text-lg placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  className="scroll-animate h-40 w-full rounded-2xl border border-gray-300 p-4 text-lg placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button - Matching About page button style */}
              <div className="mt-12 text-center">
                <button
                  type="submit"
                  className="scroll-animate rounded-full bg-teal-400 px-8 py-4 text-xl font-semibold text-white shadow-md transition duration-150 hover:bg-teal-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
