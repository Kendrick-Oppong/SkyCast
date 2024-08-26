import { MobileNav } from "@/components/sheet";
import { ModeToggle } from "@/components/theme";
import { navbarLinks } from "@/constant";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="px-5">
      <nav className="flex items-center justify-between py-2 font-medium">
        <div className="text-3xl font-bold">
          <Link to="/">
            <h1>
              Weather<span>Lens</span>
            </h1>
          </Link>
        </div>
        <ul className="flex items-center justify-between gap-5 font-bold">
          {navbarLinks.map((link) => (
            <li key={link.title} className="hidden md:inline-flex">
              <NavLink
                to={link.href}
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "rounded-sm bg-primary text-white p-1 px-2"
                    : "hover:text-primary"
                }
                end
              >
                {link.title}
              </NavLink>
            </li>
          ))}
          <ModeToggle />
          <div className="flex items-center md:hidden">
            <MobileNav>
              <Menu
                size={27}
                className="shadow-lg cursor-pointer hover:text-primary"
              />
            </MobileNav>
          </div>
        </ul>
      </nav>
    </header>
  );
};
