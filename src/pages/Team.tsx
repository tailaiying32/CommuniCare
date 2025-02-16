import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Leads = [
  { title: "Samhita", imageUrl: "../headshots/Samhita.svg", name: "Samhita Korukonda", namespace: "Founder" },
  { title: "Tailai", imageUrl: "../headshots/Tailai.svg", name: "Tailai Ying", namespace: "Tech Lead" },
  { title: "Daniela", imageUrl: "../headshots/Daniela.svg", name: "Daniela Caisaguano", namespace: "Business/Outreach Lead" },
  { title: "Mnumzana", imageUrl: "../headshots/Mnumzana.svg", name: "Mnumzana Franklin Moyo", namespace: "Lead" },
  { title: "Jean", imageUrl: "../headshots/Jean.svg", name: "Jean Luc", namespace: "Lead" },
];

const Tech = [
  { title: "Ahlaam", imageUrl: "../headshots/Ahlaam.svg", name: "Ahlaam Sebri", namespace: "Web Development" },
  { title: "Oreoluwa", imageUrl: "../headshots/Oreoluwa.svg", name: "Oreoluwa Adeniyi", namespace: "Web Development" },
  { title: "Gillian", imageUrl: "../headshots/Gillian.svg", name: "Gillian Fang", namespace: "Web Designer" },
  { title: "Jolin", imageUrl: "../headshots/Jolin.svg", name: "Jolin Li", namespace: "Web Designer" },
  { title: "Tejal", imageUrl: "../headshots/Tejal.svg", name: "Tejal Nair", namespace: "App Development" },
  { title: "Amy", imageUrl: "../headshots/Amy.svg", name: "Amy Chan", namespace: "App Development" },
  { title: "Michelle", imageUrl: "../headshots/Michelle.svg", name: "Michelle Mercer", namespace: "App Development" },
  { title: "Yuki", imageUrl: "../headshots/Yuki.svg", name: "Yuki Suwabe", namespace: "App Development" },
];

const Business = [
  { title: "Dominique", imageUrl: "../headshots/Dominique.svg", name: "Dominique Lozano", namespace: "Outreach" },
  { title: "Daniel", imageUrl: "../headshots/Daniel.svg", name: "Daniel Bitensky", namespace: "Business" },
  { title: "Miguel", imageUrl: "../headshots/Miguel.svg", name: "Miguel Gonzalez", namespace: "Marketing/Outreach" },
  { title: "Gloria", imageUrl: "../headshots/Gloria.svg", name: "Gloria Nien", namespace: "Outrech" },
  { title: "Debanjoli", imageUrl: "../headshots/Debanjoli.svg", name: "Debanjoli Chowdhury", namespace: "Outreach" },
]

const Legal = [
  { title: "Niharika", imageUrl: "../headshots/Niharika.svg", name: "Niharika Chawla", namespace: "Legal/Outreach" },
];
export default function Team() {
  return (
    <> 
      <NavBar />
      <div className="mt-20 min-h-screen bg-white">
        {/* Team/Banner Section */}
        <div className="relative h-64 flex justify-center items-center text-neutral-800 pb-10 pt-10"> {/* Added padding below */}
          <img
            src="src/assets/team banner.svg"
            alt="jigsaw puzzle"
            className="absolute w-full h-full object-cover"
          />
          <p className="text-white z-10 text-center text-5xl font-bold">Team</p>
        </div>

        {/* Leads Section */}
        <h1 className="text-4xl text-center mt-10 pt-15 pb-5">Leads</h1>
        <div className="w-[880px] min-h-[639px] mx-auto grid grid-cols-4 gap-[57px] mt-10">
          {Leads.map((lead) => (
            <div key={lead.title} className="flex flex-col items-center">
              <img
                src={lead.imageUrl}
                alt={lead.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <p className="mt-2 font-bold text-[14px] text-left w-full">{lead.name}</p>
              <p className="text-[12px] text-gray-600 text-left w-full">{lead.namespace}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <img
            src="src/assets/Vector 10.svg"
            alt="Vector 10"
            className="w-auto h-auto object-contain relative left-160 bottom-90" 
          />
        </div>

        {/* Tech Section */}
        <h1 className="text-4xl text-center -mt-160 pb-5">Tech</h1>
        <div className="w-[880px] min-h-[639px] mx-auto grid grid-cols-4 gap-[57px] mt-10">
          {Tech.map((member) => (
            <div key={member.title} className="flex flex-col items-center">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <p className="mt-2 font-bold text-[14px] text-left w-full">{member.name}</p>
              <p className="text-[12px] text-gray-600 text-left w-full">{member.namespace}</p>
            </div>
          ))}
        </div>

        {/* Business Section */}
        <h1 className="text-4xl text-center mt-10 pt-15 pb-5">Business</h1>
        <div className="w-[880px] min-h-[639px] mx-auto grid grid-cols-4 gap-[57px] mt-10">
          {Business.map((member) => (
            <div key={member.title} className="flex flex-col items-center">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <p className="mt-2 font-bold text-[14px] text-left w-full">{member.name}</p>
              <p className="text-[12px] text-gray-600 text-left w-full">{member.namespace}</p>
            </div>
          ))}
        </div>

        {/* Legal Section */}
        <h1 className="text-4xl text-center mt-10 pt-5 pb-5">Legal</h1>
        {/* Row 1: Only the single member */}
        <div className="w-[880px] mx-auto mt-10 text-center">
          <img
            src={Legal[0].imageUrl}
            alt={Legal[0].name}
            className="w-1/4 h-auto object-cover rounded-lg mx-auto"
          />
          <p className="mt-2 font-bold text-[14px]">{Legal[0].name}</p>
          <p className="text-[12px] text-gray-600">{Legal[0].namespace}</p>
        </div>

        <div className="flex justify-center -mt-65">
          <img
            src="src/assets/Vector 11.svg"
            alt="Vector 11"
            className="w-auto h-auto object-contain relative top-6" 
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
