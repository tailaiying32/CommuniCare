import NavLink from "./NavLink";
import OurAppButton from "./OurAppButton";

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 m-0 flex h-20 w-full flex-row gap-10 bg-neutral-50 pr-9 pl-6 align-middle">
      <img
        src="src/assets/Logo-horizontal.png"
        alt="horizontal communicare logo"
        className="h-8 w-[262px]"
      />
      <NavLink text={"Home"} icon="src/assets/home.png" />
      <NavLink text={"About"} icon="src/assets/about.png" />
      <NavLink text={"Contact"} icon="src/assets/contact.png" />
      <NavLink text={"Team"} icon="src/assets/team.png" />
      <OurAppButton />
    </div>
  );
}
