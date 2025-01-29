import { Link } from "react-router-dom";

interface NavLinkProps {
  text: string;
  icon: string;
  url: string;
}

export default function NavLink({ text, icon, url }: NavLinkProps) {
  return (
    <>
      <Link to={url}>
        <button className="flex h-6 w-auto flex-row gap-2 bg-none px-6 py-3 text-center">
          <img src={icon} alt="navlink icon" className="align-center h-6" />
          <p className="align-center h-6 font-semibold text-neutral-800">
            {text}
          </p>
        </button>
      </Link>
    </>
  );
}
