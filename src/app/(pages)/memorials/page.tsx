import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/_lib/auth";
import Memorials from "@/app/_views/Memorials";

async function MemorialsPage() {
  const session = (await getServerSession(authOptions)) as Session;

  if (!session) {
    redirect("/");
  }

  return session && <Memorials />;
}

export default MemorialsPage;
