// app/components/Header.tsx
import { Link } from "@remix-run/react";
import Switch from "./switch";
import DarkModeToggle from "./switch";

const Header = () => {
  return (
    <header className="flex justify-end p-4">
      <nav className="space-x-10 flex">
        <Link to="/" rel="noreferrer" className="text-lg text-gray-700 dark:text-gray-300 hover:underline">
          Blogs
        </Link>
        <Link to="/about" rel="noreferrer" className="text-lg text-gray-700 dark:text-gray-300 hover:underline">
          about
        </Link>
        <DarkModeToggle />
      </nav>
    </header>
  );
};

export default Header;
