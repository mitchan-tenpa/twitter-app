import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { useTheme } from "next-themes";

const ToggleSwitch = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, []);
  // if(!mounted) return null;

  return (
    <div className="py-16">
      <Switch
        checked={mounted}
        onChange={() => {
          setTheme(theme === "light" ? "dark" : "light");
          setMounted(false);
        }}
        className="inline-flex relative shrink-0 w-[64px] h-[28px] bg-red-400 dark:bg-teal-700 rounded-full border-2 border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors duration-200 ease-in-out cursor-pointer focus-visible:ring-opacity-75"
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className="inline-block w-[24px] h-[24px] bg-white rounded-full ring-0 shadow-lg transition duration-200 ease-in-out translate-x-9 dark:translate-x-0 pointer-events-none"
        />
      </Switch>
    </div>
  );
};

export default ToggleSwitch;
