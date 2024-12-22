import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const allowedEmails = process.env.ALLOWED_EMAILS?.split(",") || [];

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      issuer: process.env.NEXTAUTH_CLIENT_ISSUER,
      authorization: {
        params: {
          scope:
            "openid profile email https://www.googleapis.com/auth/drive.readonly", // Request only read-only access
        },
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        if (!allowedEmails.includes(user.email!)) {
          console.error(
            "User does not have permission to access this resource",
            user.email
          );
          token.hasPermission = false;
          return token;
        } else {
          token.hasPermission = true;
        }

        return {
          ...token,
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          accessToken: account?.access_token,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (!token.hasPermission) {
        session.hasPermission = false;
        return session;
      }

      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          email: token.email,
          name: token.name,
          image: token.picture,
          accessToken: session.user.accessToken,
        },
        token,
      };
    },
  },
  pages: {
    signIn: "/memorials",
    signOut: "/login",
  },
};

export default NextAuth(authOptions);
