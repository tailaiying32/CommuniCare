import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const ImageDimensions = {
  width: 190,
  height: 253.98,
};

const Leads = [
  {
    title: "Samhita",
    imageUrl: "../headshots/Samhita.svg",
    name: "Samhita Korukonda",
    namespace: "Founder",
  },
  {
    title: "Tailai",
    imageUrl: "../headshots/Tailai.svg",
    name: "Tailai Ying",
    namespace: "Tech Lead",
  },
  {
    title: "Daniela",
    imageUrl: "../headshots/Daniela.svg",
    name: "Daniela Caisaguano",
    namespace: "Business/Outreach Lead",
  },
  {
    title: "Mnumzana",
    imageUrl: "../headshots/Mnumzana.svg",
    name: "Mnumzana Franklin Moyo",
    namespace: "Lead",
  },
  {
    title: "Jean",
    imageUrl: "../headshots/Jean.svg",
    name: "Jean Luc",
    namespace: "Lead",
  },
];

export default function Team() {
  return (
    <>
      <NavBar />
        <div className="from to mt-20 min-h-screen">
          <div className="bg-gradient-to-b from-green-50 to-white">    
            {/* Team/Banner Section */}
            <div className="black h-64 items-center align-middle text-neutral-800 flex justify-center items-center">
              <img
                src="src/assets/team banner.svg"
                alt="jigsaw puzzle"
                className="absolute w-full"
              />
              <p className="text-white z-10 text-center text-5xl font-bold relative">Team</p>
            </div>

            <div className="leads p-6 bg-gray-100">
  <h2 className="text-3xl font-bold text-center mb-6">Leads</h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {Leads.slice(0, 4).map((lead) => (
      <div key={lead.name} className="lead-card bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <img src={lead.imageUrl} alt={lead.title} className="lead-image w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="lead-name text-xl font-semibold mb-2">{lead.name}</h3>
        <p className="lead-namespace text-gray-600">{lead.namespace}</p>
      </div>
    ))}
    {/* For the 1 image in the second row */}
    <div className="col-span-4 md:col-span-1 flex justify-center">
      {Leads[4] && (
        <div key={Leads[4].name} className="lead-card bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img src={Leads[4].imageUrl} alt={Leads[4].title} className="lead-image w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="lead-name text-xl font-semibold mb-2">{Leads[4].name}</h3>
          <p className="lead-namespace text-gray-600">{Leads[4].namespace}</p>
        </div>
      )}
    </div>
  </div>
</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
