import Link from "next/link";
import ToggleSwitch from "../ToggleSwitch";

const Header = () => {
  return(
    <header className="flex justify-between items-center p-3 h-5% border-b-2 border-green-500">
      <Link href="/">Home</Link>
      <ToggleSwitch />
    </header>
  );
};

export default Header;