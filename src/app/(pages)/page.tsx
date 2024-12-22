import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/memorials");
  } else {
    redirect("/login");
  }
}

export default HomePage;
