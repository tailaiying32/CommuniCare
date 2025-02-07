import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

export default function About() {
  return (
    <>
      <NavBar />

      <div className="from to mt-20 min-h-screen">
        <div className="bg-gradient-to-b from-green-50 to-white">
          {/* About Us section */}
          <div className="bg-blend-multipl relative flex h-64 items-center justify-center bg-[#6bc2ad] text-neutral-800">
            <img
              src="src/assets/image 3.png"
              alt="people"
              className="absolute h-full w-full object-cover"
            />
            <p className="relative z-10 text-center text-5xl font-bold text-white">
              About Us
            </p>
          </div>

          {/* Our Mission Section */}
          <div className="px-10 py-24 text-center md:px-32 lg:px-52">
            <h1 className="section-header">Our Mission</h1>
            <p className="mt-8 text-3xl leading-12">
              Our mission is to connect low-income and historically
              under-resourced communities with free healthcare resources in
              their vicinity.
            </p>
          </div>

          {/* Divider */}
          <div className="relative -mb-20">
            <img src="src/assets/Vector 7.png" alt="" className="w-full" />
          </div>

          {/* Our Motivation section */}
          <div className="px-10 py-28 md:px-32 lg:px-52">
            <h1 className="section-header">Our Motivation</h1>
            <p className="section-body mt-8">
              In New York State, a staggering 2.7 million individuals live below
              the federal poverty line. An additional 300,000 New York residents
              are uninsured or undocumented. These individuals are often
              marginalized and overlooked, bearing a large burden of preventable
              diseases such as hypertension and type 2 diabetes.
            </p>
            <p className="section-body mt-4">
              Despite the existence of over 1,300 clinical and social healthcare
              interventions designed specifically for under-resourced
              communities in New York, there is a significant lack of awareness
              and under-utilization of these services. Communicare is a startup
              nonprofit dedicated to bridging this gap.
            </p>
          </div>

          {/* Our Story Section */}
          <div className="rounded-2xl p-10 px-10 py-28 md:px-32 lg:px-52">
            <h1 className="section-header section-header-green">Our Story</h1>
            <p className="section-body mt-8">
              As a pre-medical student at Cornell University, Samhita Korukonda
              has volunteered at several community health centers across New
              York state. She serves as a council-member on the Healthcare for
              Homeless Network (HCHN) - a national organization dedicated to
              expanding healthcare resources.
            </p>
            <p className="section-body mt-4">
              As an HCHN volunteer, she noticed a wealth of free healthcare
              programs that were available to support low-income and uninsured
              individuals, but there was a critical lack of awareness about
              these resources. This gap in healthcare utilization leads to a
              significant burden of preventable disease in under-resourced
              communities.
            </p>
            <p className="section-body mt-4">
              Motivated to make a change, she founded Communicare along with a
              dedicated team of Cornell University students and faculty.
            </p>
          </div>

          {/* Divider */}
          <div className="relative -mb-20">
            <img src="src/assets/Vector 7.png" alt="" className="w-full" />
          </div>

          {/* Our Goal Section */}
          <div className="px-10 py-24 md:px-32 lg:px-52">
            <h1 className="section-header">Our Goal</h1>
            <p className="section-body mt-8">
              To ensure that these individuals are not left behind in the
              healthcare system. By increasing awareness and utilization of free
              healthcare resources through our app, we hope to alleviate the
              burden of preventable diseases within these communities.
            </p>
          </div>

          {/* Divider */}
          <div className="relative -mt-20">
            <img src="src/assets/Vector 6.png" alt="" className="w-full" />
          </div>

          {/* What We Do Section */}
          <div className="mb-24 rounded-2xl p-10 px-10 md:px-32 lg:px-52">
            <h1 className="section-header section-header-green">What We Do</h1>
            <p className="section-body mt-8">
              We work closely with community partners, social workers, and
              medical professionals throughout New York to hold workshops that
              educate low-income individuals about free clinical and social
              healthcare resources available in their vicinity.
            </p>
            <p className="section-body mt-4">
              Our workshops provide education and guidance for individuals with
              factors that may limit their ability to receive healthcare, such
              as insurance/financial status or citizenship.
            </p>
            <p className="section-body mt-4">
              Additionally, our activities are supported by a free, easy-to-use
              app that connects individuals to clinical and social resources
              based on factors such as insurance status, language sensitivity,
              distance preferences, and more.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
