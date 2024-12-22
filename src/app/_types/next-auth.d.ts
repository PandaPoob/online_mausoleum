import { User } from "next-auth";
declare module "next-auth" {
  interface Session {
    hasPermission: boolean;
    user: User & {
      id: string;
      email: string;
      accessToken: string;
    };
    token: {
      id: string;
      email: string;
      name: string;
      picture: string;
      sub: string;
      accessToken: string;
    };
  }
}
