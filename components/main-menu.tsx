import Link from "next/link";
import MenuItem from "./menu-item";
import MenuTitle from "./menu-title";
import { Avatar, AvatarFallback } from "./ui/avatar";
import LightDarkToggle from "./light-dark-toggle";
import { cn } from "@/lib/utils";

export default function MainMenu({ className }: { className?: string }) {
  return (
    <nav className={cn("bg-muted overflow-auto p-4 flex flex-col", className)}>
      <header className="border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </header>
      <ul className="py-4 grow">
        <MenuItem href="/dashboard">My Dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/accounts">Accounts</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </ul>
      <footer className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            PT
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          Logout
        </Link>
        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  );
}
