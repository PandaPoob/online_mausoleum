import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/memorials");
  } else {
    redirect("/login");
  }
}

export default Home;
