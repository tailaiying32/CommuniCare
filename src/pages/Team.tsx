import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
// hi hi hi
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
    <div>
      <NavBar />
      <h1>TEAM</h1>

      <h2>Leads</h2>
      <div className="leads-container">
        {Leads.map((lead) => (
          <div key={lead.name} className="lead-card">
            <img src={lead.imageUrl} alt={lead.title} className="lead-image" />
            <h3 className="lead-name">{lead.name}</h3>
            <p className="lead-namespace">{lead.namespace}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
