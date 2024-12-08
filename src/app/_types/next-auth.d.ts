import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: User & {
      id: String;
    };
    token: {
      id: String;
    };
  }
}
