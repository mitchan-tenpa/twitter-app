import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if(!mounted) return null;
  return(
    <header className="flex justify-center items-center h-10% border-b-2 border-green-500">
        <span className="">ホーム</span>
        <button 
          className="py-2 px-6 text-white dark:text-black bg-black dark:bg-white"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Toggle to 
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </header>
  );
};

export default Header;