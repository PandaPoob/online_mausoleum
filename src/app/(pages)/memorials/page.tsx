import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Memorials from "@/app/_views/Memorials";
import { authOptions } from "@/lib/auth";

async function MemorialsPage() {
  const session = (await getServerSession(authOptions)) as Session;

  if (!session) {
    redirect("/");
  }

  return session && <Memorials />;
}

export default MemorialsPage;
