import { navbarLinks } from "@/constant";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="px-5 py-10 bg-secondary">
      <section className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="text-3xl font-bold">
            <h1>
              Sky<span>Cast</span>
            </h1>
          </div>
          {/* Description */}
          <p className="mt-4 text-lg">
            SkyCast provides accurate and up-to-date weather forecasts to help
            you stay prepared for the day. Get insights on temperature,
            precipitation, and more.
          </p>
        </div>
        <div className="">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-2 ">
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
        </div>
      </section>
      <p className="my-4 font-semibold text-center">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};
