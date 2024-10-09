"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import UserCard from "../components/card/usercard";

export default function Dashboard() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/quiz");
    },
  });

  return (
    <div>
      {session?.user ? (
        <>
          <UserCard user={session?.user} />
          <div className="w-full mt-25 p-4 text-center">
            <Link
              href="/api/auth/signout"
              className="mx-1 my-5 px-6 py-1 text-sm rounded shadow bg-red-600 hover:bg-red-400 text-red-200 w-20 cursor-pointer"
            >
              خروج
            </Link>
          </div>
        </>
      ) : null}
      <h3>this is dashboard</h3>
    </div>
  );
}
