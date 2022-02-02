import ToggleSwitch from "../ToggleSwitch";

const Header = () => {
  return(
    <header className="flex justify-between items-center p-3 h-10% border-b-2 border-green-500">
      <span className="">ホーム</span>
      <ToggleSwitch />
    </header>
  );
};

export default Header;