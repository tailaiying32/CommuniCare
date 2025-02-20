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
            className="absolute h-full w-full object-cover"
          />
          <p className="relative z-10 text-5xl font-bold text-white">
            Contact Us
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mt-10 w-full max-w-2xl text-center pt-30">
          <p className="text-4xl text-[#437829]">Send Us a Message</p>
          <p className="mt-2 text-gray-600 pt-7 pb-5">
            Have a question? Contact us using the form below, and one of our
            team members will be in touch shortly!
          </p>

          <form className="mt-6 gap-14 space-y-4 pb-20">
            {/* Email Us Button */}
            <button
              type="button"
              className="mb-10 flex w-full items-center rounded-sm border-1 border-[#7ba769] p-6 text-left"
            >
              <img
                src="src/assets/email-dark.png"
                alt="email icon"
                className="mr-3 h-6 w-6"
              />
              <div>
                <p className="text-[0.625rem] text-gray-500">EMAIL US AT</p>
                <p className="text-xs font-semibold">
                  communicare.med@gmail.com
                </p>
              </div>
            </button>

            {/* Input Fields */}
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-sm border-1 border-neutral-400 p-2.5"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-sm border-1 border-neutral-400 p-2.5"
              />
              <textarea
                placeholder="Message"
                className="w-full rounded-sm border-1 border-neutral-400 p-2.5"
                // rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="rounded-full border-[1.5px] border-[#007730] px-6 py-2 text-[#007730] transition hover:bg-[#437829] hover:text-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
