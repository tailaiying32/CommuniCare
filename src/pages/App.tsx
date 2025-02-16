import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const faqs = [
  {
    question: "What is the CommuniCare app?",
    answer: "The CommuniCare app is a powerful tool designed to connect under-resourced individuals with healthcare resources in their communities. Users can create an account in the app by providing basic information such as address, phone number, distance preferences, insurance status, and other relevant details. When you need to find healthcare resources in your area, simply use our map feature to filter recommendations based on the services required. The app's machine learning-based algorithm will then recommend tailored resources that match your preferences and needs. This personalized approach ensures that users can easily access the healthcare services they need. For more information on how the app works, please visit the Our App page on our website."
  },
  {
    question: "Who can benefit from CommuniCare?",
    answer: "CommuniCare is designed to serve low-income and historically under-resourced communities, ensuring that these individuals are not left behind in the healthcare system. Our goal is to bridge the gap in healthcare access by providing resources and support to those who need it the most. Through our workshops, free app, and community partnerships, we strive to create a more equitable healthcare landscape where no one is left behind."
  },
  {
    question: "Is the CommuniCare app free to use?",
    answer: "Yes, the CommuniCare app is completely free to use! Our mission is to make healthcare resources accessible to all, and we firmly believe that cost should not be a barrier to this access. By offering the app for free, we aim to ensure that everyone, regardless of their financial situation, can benefit from the healthcare resources and support we provide."
  },
  {
    question: "How does CommuniCare ensure the quality of the healthcare resources listed?",
    answer: "We verify sources, update listings regularly, and collect user feedback to ensure quality."
  },
  {
    question: "How can healthcare services/programs get listed on the CommuniCare app?",
    answer: "Healthcare programs and services that wish to be listed on the CommuniCare app can reach out to us through our website. Our team will carefully review the services provided to ensure they align with our mission and meet the needs of our community. If deemed suitable, we will add them to our comprehensive database, making them accessible to the communities we serve. By collaborating with a diverse range of healthcare providers, we aim to offer a wide array of resources to our users, enhancing their ability to find the care they need."
  },
  {
    question: "How often is the information on the CommuniCare app updated?",
    answer: "To ensure our users have access to the most current and accurate healthcare resources, we update our healthcare databases on a bi-monthly basis. This regular updating process allows us to provide timely information about available services, ensuring that users can make informed decisions about their healthcare."
  },
  {
    question: "How can I get involved with CommuniCare?",
    answer: "If you are a student or faculty member interested in joining our mission, please fill out the interest form on our website. Applications are reviewed periodically and one of our team leads will be in touch! If you are a community member or healthcare professional interested in partnering with us, please email us using the contact form, and we will be in touch!"
  }
];

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <NavBar/>
      {/* Meet the CommuniCare App Section */}
      <div className="text-center mt-80 ml-100 px-6">
        <h1 className="text-4xl font-bold text-gray-900">Meet the CommuniCare App</h1>
        <p className="mt-4 text-lg text-gray-700 mx-64 text-left relative left-3">
        Our app takes into consideration user needs such as <strong className="font-semibold">distance</strong>, 
        <strong className="font-semibold"> accessibility</strong>, 
        <strong className="font-semibold"> insurance status</strong>, among others, to recommend matched clinical and social healthcare resources.
        </p>
        <button className="mt-6 bg-[#53B49D] text-white text-lg font-semibold w-[215px] h-[70px] 
        rounded-[60px] shadow-md hover:bg-[#46A08B] transition duration-300 relative right-30">
        Join App Waitlist
        </button>
      </div>

      <div className="flex justify-center -mt-105 ml-100">
          <img
            src="src/assets/Group 52.png"
            alt="Group 52"
            className="w-auto h-auto object-contain relative right-139" 
          />
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto my-20 p-6 border-none">
      <h2 className="text-3xl font-bold text-center text-gray-900">FAQ</h2>
      <div className="mt-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 py-4">
            <button
              className="pt-2 w-full text-left flex justify-between items-center text-[19px] font-normal leading-[18.75px] tracking-[0%] font-['Roboto'] focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <svg
                width="12"
                height="7.41"
                viewBox="0 0 12 7.41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-500 ease-in-out ${openIndex === index ? 'rotate-180' : ''}`}
              >
                <path d="M1 1L6 6L11 1" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
            >
              <p className="mt-4 ml-4 text-gray-700 text-[17px] leading-[22px] tracking-[0.5%] font-['Roboto'] font-extralight">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      
      <Footer/>
    </>
  );
}
