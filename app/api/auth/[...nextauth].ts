import NextAuth from "next-auth";
import { Options } from "./Options";
// import GithubProvider from "next-auth/providers/github"; // Example of a provider

const handler = NextAuth(
  Options
  // {
  // providers: [
  // GithubProvider({
  //   clientId: process.env.GITHUB_CLIENT_ID,
  //   clientSecret: process.env.GITHUB_CLIENT_SECRET,
  // }),
  //   ],
  //   secret: process.env.NEXTAUTH_SECRET, // Optional: Add a secret for signing tokens if needed
  // }
);

export { handler as GET, handler as POST };
