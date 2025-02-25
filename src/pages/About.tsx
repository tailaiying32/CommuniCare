import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function About() {
  // Add the same animation effect from Home page
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
        {/* Hero Section - Enhanced with better styling */}
        <div className="relative flex h-80 items-center justify-center overflow-hidden bg-teal-400 text-white">
          <div className="absolute inset-0 bg-teal-500 opacity-20"></div>
          <div className="absolute right-0 bottom-0">
            <svg
              className="h-32 w-32 text-teal-300 opacity-30"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <circle cx="75" cy="75" r="25" />
            </svg>
          </div>
          <div className="absolute top-0 left-0">
            <svg
              className="h-48 w-48 text-teal-300 opacity-20"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <circle cx="25" cy="25" r="25" />
            </svg>
          </div>
          <h1 className="scroll-animate relative z-10 text-5xl font-bold md:text-6xl">
            About Us
          </h1>
        </div>

        {/* Our Mission - Added subtle styling */}
        <div className="relative bg-neutral-50 px-4 py-16 text-center md:px-10 md:py-20 lg:px-20 xl:px-52">
          <h2 className="scroll-animate text-4xl font-bold text-neutral-800 md:text-5xl">
            Our Mission
          </h2>
          <p className="scroll-animate mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-700 md:text-2xl md:leading-10">
            Our mission is to connect low-income and historically
            under-resourced communities with free healthcare resources in their
            vicinity.
          </p>
        </div>

        {/* Our Motivation - Enhanced with visual elements */}
        <div className="relative bg-teal-50 px-4 py-16 md:px-10 md:py-20 lg:px-20 xl:px-52">
          <div className="absolute top-0 right-0 opacity-10">
            <svg
              className="h-64 w-64 text-teal-600"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M0,0 L100,0 L100,100 Z" />
            </svg>
          </div>

          <h2 className="scroll-animate relative z-10 text-4xl font-bold text-neutral-800 md:text-5xl">
            Our Motivation
          </h2>
          <div className="relative z-10">
            <p className="scroll-animate mt-8 text-lg leading-8 text-neutral-700 md:text-2xl md:leading-10">
              In New York State, a staggering 2.7 million individuals live below
              the federal poverty line. An additional 300,000 New York residents
              are uninsured or undocumented. These individuals are often
              marginalized and overlooked, bearing a large burden of preventable
              diseases such as hypertension and type 2 diabetes.
            </p>
            <p className="scroll-animate mt-4 text-lg leading-8 text-neutral-700 md:text-2xl md:leading-10">
              Despite the existence of over 1,300 clinical and social healthcare
              interventions designed specifically for under-resourced
              communities in New York, there is a significant lack of awareness
              and under-utilization of these services. Communicare is a startup
              nonprofit dedicated to bridging this gap.
            </p>
          </div>
        </div>

        {/* Our Story - Enhanced with more visual interest */}
        <div className="relative bg-teal-50 px-4 py-16 md:px-10 md:py-20 lg:px-20 xl:px-52">
          <div className="absolute bottom-20 left-0 opacity-5">
            <svg
              className="h-96 w-96 text-teal-800"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
          </div>

          <h2 className="scroll-animate text-4xl font-bold text-teal-400 md:text-5xl">
            Our Story
          </h2>
          <div className="mt-8 md:flex md:items-start md:space-x-8">
            <div className="">
              <p className="scroll-animate text-lg leading-8 text-neutral-700 md:text-2xl md:leading-10">
                As a pre-medical student at Cornell University, Samhita
                Korukonda has volunteered at several community health centers
                across New York state. She serves as a council-member on the
                Healthcare for Homeless Network (HCHN) - a national organization
                dedicated to expanding healthcare resources.
              </p>
              <p className="scroll-animate mt-4 text-lg leading-8 text-neutral-700 md:text-2xl md:leading-10">
                As an HCHN volunteer, she noticed a wealth of free healthcare
                programs that were available to support low-income and uninsured
                individuals, but there was a critical lack of awareness about
                these resources. This gap in healthcare utilization leads to a
                significant burden of preventable disease in under-resourced
                communities.
              </p>
              <p className="scroll-animate mt-4 text-lg leading-8 text-neutral-700 md:text-2xl md:leading-10">
                Motivated to make a change, she founded Communicare along with a
                dedicated team of Cornell University students and faculty.
              </p>
            </div>
          </div>
        </div>

        {/* Our Goal */}
        <div className="relative bg-neutral-50 px-4 py-16 md:px-10 md:py-20 lg:px-20 xl:px-52">
          <svg
            className="absolute bottom-0 left-0 h-40 w-40 text-teal-100"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <circle cx="0" cy="100" r="40" />
          </svg>

          <h2 className="scroll-animate relative z-10 text-4xl font-bold text-neutral-800 md:text-5xl">
            Our Goal
          </h2>
          <div className="relative z-10 md:flex md:items-center md:space-x-8">
            <div className="">
              <p className="scroll-animate mt-8 text-lg leading-8 text-neutral-700 md:text-2xl md:leading-10">
                To ensure that these individuals are not left behind in the
                healthcare system. By increasing awareness and utilization of
                free healthcare resources through our app, we hope to alleviate
                the burden of preventable diseases within these communities.
              </p>
            </div>
            {/* <div className="hidden md:flex md:w-1/4 items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-teal-400 flex items-center justify-center shadow-lg">
                <span className="text-white text-5xl font-bold">2025</span>
              </div>
            </div> */}
          </div>
        </div>

        {/* What We Do - Enhanced with visual structure */}
        <div className="relative bg-neutral-50 px-4 py-16 pb-32 md:px-10 md:py-20 lg:px-20 xl:px-52">
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

          <h2 className="scroll-animate text-4xl font-bold text-teal-400 md:text-5xl">
            What We Do
          </h2>

          <div className="relative z-10 mt-8 grid gap-6 md:grid-cols-3">
            <div className="scroll-animate rounded-lg bg-white p-8 shadow-sm transition duration-150 hover:shadow-md">
              <h3 className="mb-3 text-xl font-bold text-neutral-800">
                Community Workshops
              </h3>
              <p className="text-xl leading-8 text-neutral-700">
                We work closely with community partners, social workers, and
                medical professionals throughout New York to hold workshops that
                educate low-income individuals about free clinical and social
                healthcare resources.
              </p>
            </div>

            <div className="scroll-animate rounded-lg bg-white p-6 shadow-sm transition duration-150 hover:shadow-md">
              <h3 className="mb-3 text-xl font-bold text-neutral-800">
                Personalized Guidance
              </h3>
              <p className="text-xl leading-8 text-neutral-700">
                Our workshops provide education and guidance for individuals
                with factors that may limit their ability to receive healthcare,
                such as insurance/financial status or citizenship.
              </p>
            </div>

            <div className="scroll-animate rounded-lg bg-white p-6 shadow-sm transition duration-150 hover:shadow-md">
              <h3 className="mb-3 text-xl font-bold text-neutral-800">
                Mobile App Solution
              </h3>
              <p className="text-xl leading-8 text-neutral-700">
                Our free, easy-to-use app connects individuals to clinical and
                social resources based on factors such as insurance status,
                language sensitivity, distance preferences, and more.
              </p>
            </div>
          </div>

          <div className="my-16 text-center">
            <button className="scroll-animate rounded-full bg-teal-400 px-6 py-4 text-xl font-semibold text-white shadow-md transition duration-150 hover:bg-teal-500">
              Join Our Mission
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
