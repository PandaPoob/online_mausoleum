import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Send Anmodning",
};

function RequestPage() {
  return (
    <section className="bg-basic-bg bg-cover bg-repeat-y min-h-screen">
      <div className="grid m-auto max-w-screen-lg py-20">
        <h1 className="font-primary text-2xl md:text-4xl text-center mb-2">
          Send anmodning
        </h1>
        <p className="text-center">
          OBS! Har du anmodet om adgang? Gør det{" "}
          <Link href={`/request`} className="underline">
            her
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
export default RequestPage;
