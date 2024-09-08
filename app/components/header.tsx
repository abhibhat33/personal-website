// app/components/Header.tsx
import { Link } from "@remix-run/react";
import Switch from "./switch";
import DarkModeToggle from "./switch";
import logo from '../assests/logo_2.webp'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-12 w-auto" />
      </div>
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
