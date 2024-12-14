import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const allowedEmails = process.env.ALLOWED_EMAILS?.split(",") || [];

export async function authenticateUser() {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.error("No session found");
    redirect("/guide");
  }

  const userEmail = session.user?.email;

  if (!allowedEmails.includes(userEmail)) {
    console.error(
      "User does not have permission to access this resource",
      userEmail
    );
    redirect("/permission");
  }

  return session;
}
