import NavBar from "../components/Navbar";
import "./Home.css";
import Footer from "../components/Footer";

// testing git

function Home() {
  return (
    <>
      <NavBar />
      <div className="mt-20 min-h-screen bg-teal-50">
        <div className="relative bg-gradient-to-b from-white via-white to-white/50">
          <div className="relative flex flex-col items-center max-w-6xl mx-auto text-neutral-800 py-20">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-col max-w-2xl text-left z-10">
                <h1 className="text-6xl font-bold">Find the Right Healthcare Whenever You Need.</h1>
                <p className="text-2xl font-normal mt-4">
                  CommuniCare will help connect you with free healthcare services nearby because you deserve to feel better.
                </p>
                <button className="mt-6 px-6 py-3 bg-neutral-800 text-white text-lg font-semibold rounded-full shadow-md hover:bg-gray-700 transition w-48 z-10">
                  Join App Waitlist
                </button>
              </div>

              <div className="relative z-10">
                <img
                  src="src/assets/phone.png"
                  alt="phone"
                  className="w-auto h-[500px]"
                />
              </div>
            </div>
          </div>

          <img
            src="src/assets/homes.png"
            alt="homes"
            className="absolute bottom-[-150px] w-full h-auto z-0"
          />
        </div>

        <div className="relative">
          <div className="px-52 bg-teal-50 mt-90 relative">
            <div className="flex flex-row items-center justify-between relative">
            <img
                src="src/assets/Vector 67.png"
                alt="vector1"
                className="h-auto absolute top-3 right-230" 
                style={{ width: 'auto' }} 
              />
              <p className="font-bold text-xl text-neutral-900 leading-12 relative z-10 whitespace-nowrap">
                Just diagnosed?
              </p>

              <img
                src="src/assets/Vector 68.png"
                alt="vector2"
                className="h-auto absolute top-[-85px] right-157" 
                style={{ width: 'auto' }} 
              />
              <p className="font-bold text-xl text-neutral-900 leading-12 justify-center relative z-10 whitespace-nowrap right-[35px]">
                Don’t know where to start?
              </p>

              <img
                src="src/assets/Vector 66.png"
                alt="vector3"
                className="h-auto absolute top-[40px] right-[160px]" 
                style={{ width: 'auto' }}
              />

              <p className="font-bold text-3xl text-neutral-900 leading-12 relative z-10 whitespace-nowrap">
                Start with CommuniCare
              </p>

            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full px-52 bg-teal-50 mt-75">
              <div className="flex flex-col max-w-xs text-left z-10">
                <h2 className="font-bold text-4xl text-neutral-800 mb-5">Our App</h2>
                <h5 className="font-weight-700 text-xl text-neutral-800 leading-8 justify-center">
                  Discover affordable services nearby with our easy-to-use app.
                </h5>
                <button
                  onClick={() => (window.location.href = '/App')}
                  className="mt-6 px-6 py-3 bg-teal-400 text-white text-lg font-semibold rounded-full shadow-md hover:bg-gray-700 transition w-48 z-10">
                  Learn More
                </button>
              </div>

              <div className="relative z-10">
                <img
                  src="src/assets/app.png"
                  alt="app"
                  className="w-auto"
                />
              </div>
            </div>
          <div className="flex flex-row items-center justify-between w-full px-52 bg-teal-50 mt-60">

            <div className="relative z-10">
              <img
                src="src/assets/fam_pic.png"
                alt="fam"
                className="w-auto"
              />
            </div>

            <div className="flex flex-col max-w-sm text-left z-10">
              <h2 className="font-bold text-4xl text-neutral-800 mb-5">About Us</h2>
              <p className="font-weight-700 text-xl text-neutral-800 leading-8 justify-center">
                We are committed to building healthier communities by spreading awareness of affordable resources.
              </p>
              <button
                onClick={() => (window.location.href = '/About')}
                className="mt-6 px-6 py-3 bg-teal-400 text-white text-lg font-semibold rounded-full shadow-md hover:bg-gray-700 transition w-48 z-10">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="flex flex-row items-center justify-between w-full px-52 bg-primary-base mt-75">
              <div className="flex flex-col max-w-xs text-left z-10 mt-20">
                <h2 className="font-bold text-6xl text-neutral-900 mb-5">Workshops</h2>
                <p className="font-weight-700 text-xl text-neutral-900 leading-8 justify-center">
                Join one of our workshops for personalized support and guidance on your options.
                </p>
                <h5 className="font-bold text-xl text-neutral-900 leading-8 justify-center">
                Stay Tuned!
                </h5>
              </div>

              <div className="relative z-10 mt-20">
                <img
                  src="src/assets/work_home.png"
                  alt="work"
                  className="w-auto"
                />
              </div>
              <img
                src="src/assets/Vector 71.png"
                alt="vector71"
                className="h-auto absolute bottom-[-80px] right-313" 
                style={{ width: 'auto' }} 
              />
              <img
                src="src/assets/Vector 70.png"
                alt="vector70"
                className="h-auto absolute bottom-[320px] right-60" 
                style={{ width: 'auto' }} 
              />
              <img
                src="src/assets/Vector 69.png"
                alt="vector69"
                className="h-auto absolute  bottom-[-50px] right-0" 
                style={{ width: 'auto' }} 
              />
            </div>
          
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
