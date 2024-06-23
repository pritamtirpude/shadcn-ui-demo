"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { DrawerContext } from "./ui/drawer";

type MenuItemProps = {
  children: React.ReactNode;
  href: string;
};

export default function MenuItem({ children, href }: MenuItemProps) {
  const { onClose } = useContext(DrawerContext);
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        className={cn(
          "block p-2 hover:bg-white dark:hover:bg-zinc-700 text-muted-foreground rounded-md hover:text-foreground ",
          isActive &&
            "bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground"
        )}
        href={href}
        onClick={onClose}
      >
        {children}
      </Link>
    </li>
  );
}
