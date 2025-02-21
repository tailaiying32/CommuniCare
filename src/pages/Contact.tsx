import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <NavBar />
      <div className="flex min-h-screen flex-col items-center">
        {/* Banner */}
        <div className="relative flex h-64 w-full items-center justify-center pb-10 top-22">
          <img
            src="src/assets/contact-header.png"
            alt="people"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <p className="relative z-10 text-center text-5xl font-bold text-white">
            Contact Us
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mt-10 w-full max-w-2xl text-center">
          <p className="text-4xl text-[#437829]">Send Us a Message</p>
          <p className="mt-2 text-gray-600">
            Have a question? Contact us using the form below, and one of our
            team members will be in touch shortly!
          </p>

          <form className="mt-6 gap-14 space-y-4">
            {/* Email Us Button */}
            <button
              type="button"
              className="flex w-full items-center gap-4 rounded-lg border border-[#7ba769] p-4 text-left shadow-sm transition hover:bg-[#f0f8f0]"
              
            >
              <img
                src="src/assets/email-dark.png"
                alt="email icon"
                className="h-8 w-8"
              />
              <div>
                <p className="text-sm text-gray-500">EMAIL US AT</p>
                <p className="text-lg font-semibold">
                  communicare.med@gmail.com
                </p>
              </div>
            </button>

            {/* Input Fields */}
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-neutral-400 p-3 text-lg placeholder-gray-500 focus:border-[#437829] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-neutral-400 p-3 text-lg placeholder-gray-500 focus:border-[#437829] focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                className="w-full rounded-lg border border-neutral-400 p-3 text-lg placeholder-gray-500 focus:border-[#437829] focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="rounded-full border-[1.5px] border-[#007730] bg-transparent px-8 py-3 text-lg font-semibold text-[#007730] transition hover:bg-[#437829] hover:text-white"
            >
              Send Message
            </button>

            <div className="mb-12" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
