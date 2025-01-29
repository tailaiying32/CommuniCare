import NavLink from "./NavLink";
import DownloadAppButton from "./DownloadAppButton";

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 m-0 flex h-20 w-full items-center justify-between gap-10 bg-neutral-50 pr-9 pl-6 align-middle">
      <div className="justify-self-start">
        <img
          src="src/assets/Logo-horizontal.png"
          alt="horizontal communicare logo"
          className="h-7 w-[262px]"
        />
      </div>
      <div className="flex flex-row gap-10 justify-self-end">
        <NavLink text={"Home"} icon="src/assets/home.png" />
        <NavLink text={"About"} icon="src/assets/about.png" />
        <NavLink text={"Contact"} icon="src/assets/contact.png" />
        <NavLink text={"Team"} icon="src/assets/team.png" />
        <DownloadAppButton />
      </div>
    </div>
  );
}
