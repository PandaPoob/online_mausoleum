"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Google from "../../assets/icons/google.svg";
import { useEffect } from "react";

function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && !session?.hasPermission) {
      router.push("/permission");
    } else if (session && session.hasPermission) {
      router.push("/memorials");
    }
  }, [session, router]);

  return (
    <section className="bg-basic-bg bg-cover bg-repeat-y min-h-screen">
      <div className="grid m-auto max-w-screen-lg py-20">
        <h1 className="font-primary text-2xl md:text-4xl text-center mb-2">
          Login
        </h1>
        <p className="text-center">
          OBS! Har du anmodet om adgang? Gør det{" "}
          <Link href={`/request`} className="underline">
            her
          </Link>
          .
        </p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/memorials" })}
          className="flex items-center bg-[#4086F2] rounded-sm p-0.5 m-auto mt-10 hover:bg-opacity-80 transition-all duration-300"
        >
          <span className="bg-white p-2 rounded-sm">
            <Google />
          </span>
          <span className="text-white ml-3 pr-3">Log in med Google</span>
        </button>
      </div>
    </section>
  );
}

export default Login;
