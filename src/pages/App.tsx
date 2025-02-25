import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const faqs = [
  {
    question: "What is the CommuniCare app?",
    answer:
      "The CommuniCare app is a powerful tool designed to connect under-resourced individuals with healthcare resources in their communities. Users can create an account in the app by providing basic information such as address, phone number, distance preferences, insurance status, and other relevant details. When you need to find healthcare resources in your area, simply use our map feature to filter recommendations based on the services required. The app's machine learning-based algorithm will then recommend tailored resources that match your preferences and needs. This personalized approach ensures that users can easily access the healthcare services they need. For more information on how the app works, please visit the Our App page on our website.",
  },
  {
    question: "Who can benefit from CommuniCare?",
    answer:
      "CommuniCare is designed to serve low-income and historically under-resourced communities, ensuring that these individuals are not left behind in the healthcare system. Our goal is to bridge the gap in healthcare access by providing resources and support to those who need it the most. Through our workshops, free app, and community partnerships, we strive to create a more equitable healthcare landscape where no one is left behind.",
  },
  {
    question: "Is the CommuniCare app free to use?",
    answer:
      "Yes, the CommuniCare app is completely free to use! Our mission is to make healthcare resources accessible to all, and we firmly believe that cost should not be a barrier to this access. By offering the app for free, we aim to ensure that everyone, regardless of their financial situation, can benefit from the healthcare resources and support we provide.",
  },
  {
    question:
      "How does CommuniCare ensure the quality of the healthcare resources listed?",
    answer:
      "We verify sources, update listings regularly, and collect user feedback to ensure quality.",
  },
  {
    question:
      "How can healthcare services/programs get listed on the CommuniCare app?",
    answer:
      "Healthcare programs and services that wish to be listed on the CommuniCare app can reach out to us through our website. Our team will carefully review the services provided to ensure they align with our mission and meet the needs of our community. If deemed suitable, we will add them to our comprehensive database, making them accessible to the communities we serve. By collaborating with a diverse range of healthcare providers, we aim to offer a wide array of resources to our users, enhancing their ability to find the care they need.",
  },
  {
    question: "How often is the information on the CommuniCare app updated?",
    answer:
      "To ensure our users have access to the most current and accurate healthcare resources, we update our healthcare databases on a bi-monthly basis. This regular updating process allows us to provide timely information about available services, ensuring that users can make informed decisions about their healthcare.",
  },
  {
    question: "How can I get involved with CommuniCare?",
    answer:
      "If you are a student or faculty member interested in joining our mission, please fill out the interest form on our website. Applications are reviewed periodically and one of our team leads will be in touch! If you are a community member or healthcare professional interested in partnering with us, please email us using the contact form, and we will be in touch!",
  },
];

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <NavBar />
      <div className="mt-20 min-h-screen bg-neutral-50">
        {/* Hero Banner - Matching Contact page banner style */}
        <div className="relative flex h-80 items-center justify-center overflow-hidden bg-teal-400 text-white">
          <img
            src="src/assets/contact-header.png"
            alt="App Banner"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-500 opacity-20"></div>
          <h1 className="scroll-animate relative z-10 text-6xl font-bold md:text-6xl">
            Our App
          </h1>
        </div>

        {/* Meet the CommuniCare App Section */}
        <div className="relative bg-neutral-50 px-4 py-16 md:px-10 md:py-20 lg:px-20 xl:px-52">
          {/* Decorative element from Contact page */}
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

          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
              <div className="scroll-animate lg:w-full">
                <h2 className="text-center text-5xl font-bold text-neutral-800 md:text-5xl lg:text-left">
                  Meet the CommuniCare App
                </h2>
                <p className="mt-6 text-center text-lg leading-10 text-neutral-700 md:text-2xl lg:text-left">
                  Our app takes into consideration user needs such as
                  <strong className="font-semibold"> distance</strong>,
                  <strong className="font-semibold"> accessibility</strong>,
                  <strong className="font-semibold"> insurance status</strong>,
                  among others, to recommend matched clinical and social
                  healthcare resources.
                </p>
                <button className="mx-auto mt-8 rounded-full bg-teal-400 px-8 py-4 text-xl font-semibold text-white shadow-md transition duration-150 hover:scale-100 hover:bg-teal-500 lg:mx-0">
                  Join App Waitlist
                </button>
              </div>

              <div className="scroll-animate flex justify-center lg:w-1/2">
                <img
                  src="src/assets/Group 52.png"
                  alt="App Screenshot"
                  className="h-auto max-w-1/4 object-contain lg:w-full lg:max-w-3/4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="relative bg-white px-4 py-16 md:px-10 md:py-20 lg:px-20 xl:px-52">
          <h2 className="scroll-animate mb-12 text-center text-4xl font-bold text-neutral-800 md:text-5xl">
            Frequently Asked Questions
          </h2>

          <div className="scroll-animate mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 py-5">
                <button
                  className="flex w-full items-center justify-between text-left text-xl font-medium text-neutral-800 transition duration-150 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 12 7.41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-500 ease-in-out ${openIndex === index ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M1 1L6 6L11 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "mt-4 max-h-96" : "max-h-0"}`}
                >
                  <p className="text-lg leading-8 text-neutral-700">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-animate mt-16 text-center">
            <p className="mb-6 text-xl text-neutral-700">
              Have another question not listed here?
            </p>
            <a href="/contact">
              <button className="rounded-full bg-teal-400 px-8 py-4 text-xl font-semibold text-white shadow-md transition duration-150 hover:scale-100 hover:bg-teal-500">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
