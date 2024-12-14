import Link from "next/link";
import Image from "next/image";
import logo from "../assets/icons/logo.png";

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="mb-20">
        <nav className="bg-white p-4 shadow-lg">
          <ul className="flex items-center">
            <li>
              <Link href="/">
                <Image src={logo} width={48} height={48} alt="Logo" />
              </Link>
            </li>
            <li className="ml-auto">
              <Link href="/guide">Guide</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="bg-white px-2 min-h-screen w-full">{children}</main>
    </>
  );
}

export default BaseLayout;
