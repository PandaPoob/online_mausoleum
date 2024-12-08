import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/_lib/auth";
import DefaultHome from "./DefaultHome";

async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/memorials");
  }

  return !session && <DefaultHome />;
}

export default Home;
