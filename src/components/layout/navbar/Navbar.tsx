import { navbarLinks } from "@/constant";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="px-5">
      <nav className="flex items-center justify-between py-2 font-medium">
        <div className="text-3xl font-bold">
          <h1>
            Sky<span>Cast</span>
          </h1>
        </div>
        <ul className="flex items-center justify-between gap-5">
          {navbarLinks.map((link) => (
            <li key={link.title}>
              <NavLink
                to={link.href}
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "rounded-sm text-primary" : ""
                }
                end
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
