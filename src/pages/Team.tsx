import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

type TeamMember = {
  title: string;
  imageUrl: string;
  name: string;
  namespace: string;
};

const teamData: Record<string, TeamMember[]> = {
  Leads: [
    {
      title: "Samhita",
      imageUrl: "../headshots/Samhita.svg",
      name: "Samhita Korukonda",
      namespace: "FOUNDER",
    },
    {
      title: "Emma",
      imageUrl: "../headshots/Emma.svg",
      name: "Emma Wang",
      namespace: "TECH LEAD",
    },
    {
      title: "Tailai",
      imageUrl: "../headshots/Tailai.svg",
      name: "Tailai Ying",
      namespace: "TECH LEAD",
    },
    {
      title: "Daniela",
      imageUrl: "../headshots/Daniela.svg",
      name: "Daniela Caisaguano",
      namespace: "BUSINESS/OUTREACH LEAD",
    },
    {
      title: "Jean",
      imageUrl: "../headshots/Jean.svg",
      name: "Jean Luc",
      namespace: "LEAD",
    },
    {
      title: "Mnumzana",
      imageUrl: "../headshots/Mnumzana.svg",
      name: "Mnumzana Franklin Moyo",
      namespace: "LEAD",
    },
    {
      title: "Paul",
      imageUrl: "../headshots/Paul.svg",
      name: "Paul Yang",
      namespace: "LEGAL LEAD",
    },
  ],
  Tech: [
    {
      title: "Tejal",
      imageUrl: "../headshots/Tejal.svg",
      name: "Tejal Nair",
      namespace: "APP DEVELOPMENT",
    },
    {
      title: "Amy",
      imageUrl: "../headshots/Amy.svg",
      name: "Amy Chan",
      namespace: "APP DEVELOPMENT",
    },
    {
      title: "Michelle",
      imageUrl: "../headshots/Michelle.svg",
      name: "Michelle Mercer",
      namespace: "APP DEVELOPMENT",
    },
    {
      title: "Yuki",
      imageUrl: "../headshots/Yuki.svg",
      name: "Yuki Suwabe",
      namespace: "APP DEVELOPMENT",
    },
    {
      title: "Ahlaam",
      imageUrl: "../headshots/Ahlaam.svg",
      name: "Ahlaam Sebri",
      namespace: "WEB DEVELOPMENT",
    },
    {
      title: "Oreoluwa",
      imageUrl: "../headshots/Oreoluwa.svg",
      name: "Oreoluwa Adeniyi",
      namespace: "WEB DEVELOPMENT",
    },
    {
      title: "Gillian",
      imageUrl: "../headshots/Gillian.svg",
      name: "Gillian Fang",
      namespace: "WEB DESIGNER",
    },
    {
      title: "Jolin",
      imageUrl: "../headshots/Jolin.svg",
      name: "Jolin Li",
      namespace: "WEB DESIGNER",
    },
  ],
  Business: [
    {
      title: "Daniel",
      imageUrl: "../headshots/Daniel.svg",
      name: "Daniel Bitensky",
      namespace: "BUSINESS",
    },
    {
      title: "Esha",
      imageUrl: "../headshots/Esha.svg",
      name: "Esha Shakthy",
      namespace: "BUSINESS",
    },
    {
      title: "Miguel",
      imageUrl: "../headshots/Miguel.svg",
      name: "Miguel Gonzalez",
      namespace: "MARKETING/OUTREACH",
    },
    {
      title: "Dominique",
      imageUrl: "../headshots/Dominique.svg",
      name: "Dominique Lozano",
      namespace: "OUTREACH",
    },
    {
      title: "Gloria",
      imageUrl: "../headshots/Gloria.svg",
      name: "Gloria Nien",
      namespace: "OUTREACH",
    },
    {
      title: "Debanjoli",
      imageUrl: "../headshots/Debanjoli.svg",
      name: "Debanjoli Chowdhury",
      namespace: "OUTREACH",
    },
    {
      title: "Sammie",
      imageUrl: "../headshots/Sammie.svg",
      name: "Sammie Lee",
      namespace: "OUTREACH",
    },
    {
      title: "Immamun",
      imageUrl: "../headshots/Immamun.svg",
      name: "Immamun Reza",
      namespace: "OUTREACH",
    },
  ],
  Legal: [
    {
      title: "Niharika",
      imageUrl: "../headshots/Niharika.svg",
      name: "Niharika Chawla",
      namespace: "LEGAL/OUTREACH",
    },
  ],
};

const TeamSection = ({
  title,
  members,
}: {
  title: string;
  members: TeamMember[];
}) => (
  <div className="scroll-animate relative bg-neutral-50 px-4 py-10 md:px-10 md:py-14 lg:px-48">
    <h2 className="scroll-animate text-center text-4xl font-bold text-neutral-800 md:text-5xl">
      {title}
    </h2>
    <div className="container mt-10">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
        {members.map((member) => (
          <div
            key={member.title}
            className="scroll-animate flex flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:shadow-md"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="aspect-square w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold tracking-wide text-neutral-800">
                {member.name}
              </p>
              <p className="font mt-1 text-sm tracking-wider text-neutral-600">
                {member.namespace}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Team() {
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
        <div className="relative flex h-80 items-center justify-center overflow-hidden bg-teal-400 text-white">
          <img
            src="src/assets/team banner.svg"
            alt="Team Banner"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-500 opacity-20"></div>
          <h1 className="scroll-animate relative z-10 text-5xl font-bold md:text-6xl">
            Our Team
          </h1>
        </div>

        <div className="py-16">
          {/* Team Sections */}
          {Object.entries(teamData).map(([section, members]) => (
            <TeamSection key={section} title={section} members={members} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
