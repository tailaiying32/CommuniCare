import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App() {
  return (
    <>
      <NavBar/>
      {/* <div className="min-h-screen">
        <h1>App</h1>
      </div> */}

      <div className="mt-20 min-h-screen #6BC2AD">
        {/* Team/Banner Section */}
        <div className="relative h-64 flex justify-center items-center text-neutral-800 pb-10 pt-10"> {/* Added padding below */}
          <img
            src="src/assets/team banner.svg"
            alt="jigsaw puzzle"
            className="absolute w-full h-full object-cover"
          />
          <p className="text-white z-10 text-center text-5xl font-bold">Team</p>
        </div>
        </div>
      <Footer/>
    </>
  );
}
