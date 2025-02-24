import { Link } from "react-router-dom";

interface NavLinkProps {
  text: string;
  icon: string;
  url: string;
}

export default function NavLink({ text, icon, url }: NavLinkProps) {
  return (
    <>
      <Link
        to={url}
        className="flex h-6 w-auto flex-row gap-2 bg-none px-6 py-3 text-center align-middle underline-offset-6 hover:underline decoration-neutral-800"
      >
        <img src={icon} alt="navlink icon" className="h-[22px] items-center" />
        <p className="align-center -mt-[1px] h-6 text-lg font-semibold text-neutral-800 d">
          {text}
        </p>
      </Link>
    </>
  );
}
