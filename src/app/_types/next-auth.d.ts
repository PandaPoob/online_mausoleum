import { User } from "next-auth";
declare module "next-auth" {
  interface Session {
    user: User & {
      id: string;
      email: string;
    };
    token: {
      id: string;
      email: string;
      name: string;
      picture: string;
      sub: string;
    };
  }
}
