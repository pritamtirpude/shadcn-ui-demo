"use client";

import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { MoonIcon, SunIcon } from "lucide-react";

type LightDarkToggleProps = {
  className?: string;
};

export default function LightDarkToggle({ className }: LightDarkToggleProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={className}
          onClick={() => {
            setIsDarkMode((prevState) => !prevState);
            document.body.classList.toggle("dark");
          }}
        >
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </TooltipTrigger>
        <TooltipContent>
          {isDarkMode ? "Enable light mode" : "Enable dark mode"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
