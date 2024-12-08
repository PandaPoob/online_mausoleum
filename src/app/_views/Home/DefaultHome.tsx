"use client";
import { signIn } from "next-auth/react";

function DefaultHome() {
  return (
    <main>
      you are not logged in
      <div className="flex gap-7 justify-center lg:justify-start items-center mt-16 flex-wrap">
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      </div>
    </main>
  );
}

export default DefaultHome;
