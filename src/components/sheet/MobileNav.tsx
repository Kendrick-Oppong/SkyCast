import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navbarLinks } from "@/constant";
import { Link, NavLink } from "react-router-dom";

export const MobileNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <div className="mb-5 text-3xl font-bold">
          <SheetClose asChild>
            <Link to="/">
              <h1>
                Sky<span>Cast</span>
              </h1>
            </Link>
          </SheetClose>
        </div>
        <div className="space-y-4">
          {navbarLinks.map((link) => (
            <li key={link.title} className="font-bold ">
              <SheetClose asChild>
                <Link to={link.href} className="hover:text-primary">
                  {link.title}
                </Link>
              </SheetClose>
            </li>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
