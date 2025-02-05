import { useState } from "react";
import NavLink from "./NavLink";
import DownloadAppButton from "./DownloadAppButton";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 z-50 m-0 flex h-20 w-full items-center justify-between gap-10 bg-neutral-50 pr-9 pl-6 align-middle">
      {/* Logo Section */}
      <div className="justify-self-start">
        <img
          src="src/assets/Logo-horizontal.png"
          alt="horizontal communicare logo"
          className="h-auto w-3xs"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden flex-row gap-10 justify-self-end lg:flex">
        <NavLink text={"Home"} icon="src/assets/home.png" url="/" />
        <NavLink text={"About"} icon="src/assets/about.png" url="/about" />
        <NavLink
          text={"Contact"}
          icon="src/assets/contact.png"
          url="/contact"
        />
        <NavLink text={"Team"} icon="src/assets/team.png" url="/team" />
        <DownloadAppButton />
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="flex h-10 w-10 flex-col items-center justify-center space-y-2"
        >
          {isMobileMenuOpen ? (
            <img src="src/assets/close.png" className="w-7" />
          ) : (
            <img src="src/assets/menu.png" alt="navbar menu" className="w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 flex w-full flex-col items-center space-y-8 bg-neutral-50 py-6 lg:hidden">
          <div className="flex-col items-center space-y-8 bg-neutral-50 py-6 lg:hidden">
            <NavLink text={"Home"} icon="src/assets/home.png" url="/" />
            <NavLink text={"About"} icon="src/assets/about.png" url="/about" />
            <NavLink
              text={"Contact"}
              icon="src/assets/contact.png"
              url="/contact"
            />
            <NavLink text={"Team"} icon="src/assets/team.png" url="/team" />
          </div>

          <DownloadAppButton />
        </div>
      )}
    </div>
  );
}
