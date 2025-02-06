import NavBar from "../components/Navbar";
import "./Home.css";
import Footer from "../components/Footer";

// testing git

function Home() {
  return (
    <>
      <NavBar />
      <div className="mt-20 min-h-screen">
        <p className="text-6xl font-bold text-neutral-800">
        Find the Right Healthcare Whenever You Need. 
        </p>
        <p className="text-2xl font-normal text-neutral-800">
        CommuniCare will help connect you with free healthcare services nearby because you deserve to feel better. 
        </p>
        <p className="text-6xl font-bold text-neutral-900 underline underline-offset-auto">
          This is CommuniCare
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
