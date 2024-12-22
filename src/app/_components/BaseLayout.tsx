"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Logo from "../assets/icons/logo.svg";

function BaseLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();

  return (
    <>
      <header>
        <nav className="bg-white p-3 drop-shadow-md flex justify-between font-body">
          <Link href="/">
            <Logo />
          </Link>
          <ul className="flex items-center gap-10 mr-2">
            <li>
              <Link
                href="/questions"
                className="group text-dark transition duration-300"
              >
                Spørgsmål & Svar
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-dark"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/request"
                className="group text-dark transition duration-300"
              >
                Send Anmodning
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-dark"></span>
              </Link>
            </li>

            {session ? (
              <button
                className="bg-dark text-white py-2 px-8 hover:bg-opacity-90 transition-all duration-300"
                onClick={() => signOut()}
              >
                Log af
              </button>
            ) : (
              <li>
                <Link
                  href="/login"
                  className="group text-dark transition duration-300"
                >
                  Login
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-dark"></span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main className="font-body w-full">{children}</main>
    </>
  );
}

export default BaseLayout;
