import prisma from "@/app/libs/prisma"; // Ensure you have a default export for your Prisma client
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone",
          type: "text",
          placeholder: "Enter your phone number",
        },
      },
      async authorize(credentials) {
        if (!credentials?.phone) return null;

        const user = await prisma.user.findUnique({
          where: { phone: credentials.phone },
        });

        if (!user) return null;

        return user; // Return user object if found
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      // Use token information if needed
      return {
        ...session,
        user: {
          ...session.user,
          // Include additional properties if needed from token (like phone)
        },
      };
    },
    jwt({ token, user }) {
      if (user) {
        // Here you can include additional user properties in the token
        return {
          ...token,
          // phone: user.phone, // If phone is a field in the user returned
        };
      }
      return token; // Return the unchanged token if no user is present
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/", // Define your custom sign-in page
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
