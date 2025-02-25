import NavBar from "../components/Navbar";
import "./Home.css";
import Footer from "../components/Footer";
import { useEffect } from "react";

function Home() {
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
      <div className="mt-20 min-h-screen bg-neutral-50">
        {/* Hero Section */}
        <div className="relative bg-neutral-50">
          <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-10 text-neutral-800 sm:px-6 md:py-20 lg:px-12">
            <div className="flex w-full flex-col items-center justify-between md:flex-row">
              <div className="z-10 mb-8 flex max-w-2xl flex-col text-center md:mb-0 md:text-left">
                <h1 className="scroll-animate mb-4 text-4xl leading-tight font-bold sm:text-5xl md:text-6xl md:leading-[75px]">
                  Find the Right Healthcare Whenever You Need.
                </h1>
                <p className="scroll-animate mt-4 mb-4 text-xl leading-8 font-normal sm:text-2xl md:leading-10">
                  CommuniCare will help connect you with free healthcare
                  services nearby because you deserve to feel better.
                </p>
                <div className="flex justify-center md:justify-start">
                  <button className="scroll-animate z-10 mt-6 h-16 w-64 rounded-full bg-neutral-800 px-6 py-3 text-xl font-semibold text-white shadow-md transition duration-150 hover:scale-100 hover:bg-neutral-700 sm:h-20 sm:w-72 sm:text-2xl">
                    Join App Waitlist
                  </button>
                </div>
              </div>

              <div className="relative z-10">
                <img
                  src="src/assets/phone.png"
                  alt="phone"
                  className="scroll-animate h-[0px] lg:h-[600px]"
                />
              </div>
            </div>
          </div>

          <img
            src="src/assets/homes.png"
            alt="homes"
            className="absolute bottom-[-150px] z-0 h-auto w-full opacity-50"
          />
        </div>

        {/* Our App Section */}
        <div className="relative">
          <div className="mt-32 flex w-full flex-col items-center justify-between bg-teal-50 px-4 py-16 sm:px-8 md:flex-row md:px-16 md:py-32 lg:px-32 xl:px-52">
            <div className="z-10 mb-8 flex max-w-xs flex-col text-center md:mb-0 md:text-left">
              <h2 className="scroll-animate mb-5 text-center text-4xl font-bold text-neutral-800 md:text-left md:text-5xl">
                Our App
              </h2>
              <h5 className="font-weight-700 scroll-animate justify-center text-center text-xl leading-8 text-neutral-800 md:text-left md:text-2xl md:leading-10">
                Discover affordable services nearby with our easy-to-use app.
              </h5>
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => (window.location.href = "/App")}
                  className="scroll-animate z-10 mt-6 w-48 rounded-full bg-teal-400 px-6 py-4 text-xl font-semibold text-white shadow-md transition duration-150 hover:scale-100 hover:bg-teal-500"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative z-10 w-3/4">
              <img
                src="src/assets/app.png"
                alt="app"
                className="scroll-animate mx-0 max-w-[full] md:mx-16 lg:w-auto"
              />
            </div>
          </div>

          {/* About us Section */}
          <div className="flex w-full flex-col-reverse items-center justify-between bg-neutral-50 px-4 py-16 sm:px-8 md:flex-row md:px-16 md:py-32 lg:px-32 xl:px-52">
            <div className="relative z-10 mx-6 mb-8 md:mb-0 lg:mx-0">
              <img
                src="src/assets/fam_pic.png"
                alt="fam"
                className="scroll-animate w-auto max-w-full"
              />
            </div>

            <div className="z-10 flex max-w-sm flex-col text-center md:text-left">
              <h2 className="scroll-animate mb-5 text-4xl font-bold text-neutral-800 md:text-5xl">
                About Us
              </h2>
              <p className="font-weight-700 scroll-animate justify-center text-xl leading-8 text-neutral-800 md:text-2xl md:leading-10">
                We are committed to building healthier communities by spreading
                awareness of affordable resources.
              </p>
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => (window.location.href = "/About")}
                  className="scroll-animate z-10 mt-6 mb-10 w-48 rounded-full bg-teal-400 px-6 py-4 text-xl font-semibold text-white shadow-md transition duration-150 hover:scale-100 hover:bg-teal-500 md:mb-0"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Workshops Section */}
          <div className="relative flex w-full flex-col items-center justify-between overflow-hidden bg-primary-base px-4 pb-16 sm:px-8 md:flex-row md:px-16 lg:px-32 xl:px-52">
            <div className="z-10 mt-16 mb-8 flex max-w-xs flex-col text-center md:mt-20 md:mb-0 md:text-left">
              <h2 className="scroll-animate mb-5 text-4xl font-bold text-neutral-900 md:text-5xl">
                Workshops
              </h2>
              <p className="font-weight-700 scroll-animate justify-center pb-4 text-xl leading-8 text-neutral-900 md:text-2xl md:leading-10">
                Join one of our workshops for personalized support and guidance
                on your options.
              </p>
              <h5 className="scroll-animate justify-center text-xl leading-8 font-bold text-neutral-900 md:text-2xl md:leading-10">
                Stay Tuned!
              </h5>
            </div>

            <div className="relative -bottom-8 z-10 w-1/2">
              <img
                src="src/assets/work_home.png"
                alt="work"
                className="scroll-animate w-auto max-w-full"
              />
            </div>

            {/* Vector images with responsive positioning */}
            <img
              src="src/assets/Vector 71.png"
              alt="vector71"
              className="absolute right-0 bottom-[-80px] h-auto w-0 sm:right-1/4 md:w-auto"
            />
            <img
              src="src/assets/Vector 70.png"
              alt="vector70"
              className="absolute right-0 bottom-[150px] h-auto w-0 sm:right-16 sm:bottom-[320px] md:w-auto"
            />
            <img
              src="src/assets/Vector 69.png"
              alt="vector69"
              className="absolute right-0 bottom-[-50px] h-auto w-0 md:w-auto"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
