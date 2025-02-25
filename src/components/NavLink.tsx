import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  text: string;
  icon: string;
  url: string;
}

export default function NavLink({ text, icon, url }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === url;

  return (
    <>
      <Link
        to={url}
        className={`flex h-6 w-auto flex-row gap-2 bg-none px-6 py-3 text-center align-middle decoration-neutral-800 underline-offset-6 transition duration-150 ${
          isActive ? "underline" : "hover:underline"
        }`}
      >
        <img src={icon} alt="navlink icon" className="h-[22px] items-center" />
        <p className="align-center d -mt-[1px] h-6 text-lg font-semibold text-neutral-800">
          {text}
        </p>
      </Link>
    </>
  );
}
