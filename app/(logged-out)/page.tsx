import { Fragment } from "react";
import { PersonStandingIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <Fragment>
      <h1 className="flex gap-2 items-center">
        <PersonStandingIcon size={50} className="text-pink-500" /> SupportMe
      </h1>
      <p>The best dashboard to manage customer support.</p>
      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href="/login">Log In</Link>
        </Button>
        <small>or</small>
        <Button variant="outline" asChild>
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
    </Fragment>
  );
}
