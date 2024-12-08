import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import DefaultHome from "./DefaultHome";
import { authOptions } from "@/lib/auth";

async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/memorials");
  }

  return !session && <DefaultHome />;
}

export default Home;
