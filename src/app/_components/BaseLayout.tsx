import Link from "next/link";
import Logo from "../assets/icons/logo.svg";

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <nav className="bg-white p-3 drop-shadow-md">
          <ul className="flex items-center">
            <li>
              <Link href="/">
                <Logo />
              </Link>
            </li>
            <li className="ml-auto">
              <Link href="/guide">Guide</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="font-body w-full">{children}</main>
    </>
  );
}

export default BaseLayout;
