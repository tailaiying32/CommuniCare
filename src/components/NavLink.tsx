interface NavLinkProps {
  text: string;
  icon: string;
}

export default function NavLink({ text, icon }: NavLinkProps) {
  return (
    <>
      <button className="flex h-[23px] w-auto flex-row bg-none text-center">
        <img src={icon} alt="navlink icon" />
        <p className="text-sm font-semibold text-neutral-800">{text}</p>
      </button>
    </>
  );
}
