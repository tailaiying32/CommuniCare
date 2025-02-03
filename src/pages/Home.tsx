import NavBar from "../components/Navbar";
import "./Home.css";
import Footer from "../components/Footer";

// testing git
//ygygygdiqwhxuwxhwgxwtuhwx qwt
function Home() {
  return (
    <>
      <NavBar />
      <div className="mt-20 min-h-screen">
        <p className="text-6xl font-bold text-neutral-900 underline underline-offset-auto">
          This is CommuniCare
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
