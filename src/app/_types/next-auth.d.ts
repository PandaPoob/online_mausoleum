import { User, Session } from "next-auth";
declare module "next-auth" {
  interface User {
    // id: string;
    email: string;
    name: string;
    image: string;
  }
  interface Session {
    user: User & {
      id: string;
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
