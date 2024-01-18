import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "919b87qa4sdfs1qdc44f53baf9",
      clientSecret: "2aeq98df3f8cwqerc2d03a8360e993c115ba8d5f71de9",
    }),
  ],
};

export default NextAuth(authOptions)
