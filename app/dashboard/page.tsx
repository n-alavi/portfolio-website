"use Client";

import { Link } from "lucide-react";
import OtpLogin from "../components/OtpLogin";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { Button } from "../components/ui/button";
import { useAuth } from "../components/AuthProvider";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <div className="text-center mt-8">
      <h1 className="font-bold text-center mb-5">
        How to add one-time Password phone Authentication
      </h1>
      {user ? (
        <h2>Welcome to the app as a logged in as user {user?.uid}</h2>
      ) : (
        <h2>yiu are not logged in </h2>
      )}
      {user ? (
        <Button onClick={() => signOut(auth)} className="mt-10">
          Sign out
        </Button>
      ) : (
        <Link href="/login">
          <Button onClick={() => signOut(auth)} className="mt-10">
            Sign In
          </Button>
        </Link>
      )}
      {/* <OtpLogin /> */}
    </div>
  );
}
