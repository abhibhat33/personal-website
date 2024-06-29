// app/components/Header.tsx
import DarkModeToggle from "./switch";

const Header = () => {
  return (
    <header className="flex justify-end p-4">
      <nav className="space-x-10 flex">
        <a href="/" className="text-lg text-gray-700 dark:text-gray-300 hover:underline">Blog</a>
        <a href="/about" className="text-lg text-gray-700 dark:text-gray-300 hover:underline">About</a>
        <DarkModeToggle />
      </nav>
    </header>
  );
};

export default Header;
