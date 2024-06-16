import LightDarkToggle from "@/components/light-dark-toggle";
import { Fragment } from "react";

type LoggedOutLayoutProps = {
  children?: React.ReactNode;
};

export default function LoggedOutLayout({ children }: LoggedOutLayoutProps) {
  return (
    <Fragment>
      <div className="flex flex-col gap-4 min-h-screen items-center justify-center">
        {children}
      </div>
      <LightDarkToggle className="fixed top-[calc(50%-12px)] right-2 -mt-4" />
    </Fragment>
  );
}
