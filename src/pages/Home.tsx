import NavBar from "../components/Navbar";
import "./Home.css";
import Footer from "../components/Footer";

// testing git


function Home() {
  return (
    <>
      <NavBar />
      <div className="mt-20 min-h-screen bg-teal-50">
        {/* Introduction section */}

        <div className="relative bg-gradient-to-b from-white via-white-50 to-teal-50">
          <img
            src="src/assets/houses.png"
            alt="homes"
            className="absolute b- w-full h-auto"
          />

          <div className="relative flex flex-col items-center text-left text-neutral-800 py-20">
            <h1 className="text-6xl font-bold text-center">
              Find the Right Healthcare Whenever You Need.
            </h1>
            <p className="text-2xl font-normal text-center mt-4">
              CommuniCare will help connect you with free healthcare services nearby because you deserve to feel better.
            </p>
            <button className="mt-6 px-6 py-3 bg-neutral-800 text-white text-lg font-semibold rounded-full shadow-md hover:bg-gray-700 transition">
              Join App Waitlist
            </button>
          </div>
          <div className="px-52 bg-teal-50 ">
            <p font-weight-700 text-2xl text-neutral-900 leading-12Q>Just diagnosed?</p>
            <p font-weight-700 text-2xl text-neutral-900 leading-12 justify-center>Don’t know where to start? ?</p>
            <p font-weight-700 text-4xl text-neutral-900 leading-12>Start with CommuniCare</p>

          </div>

        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default Home;
