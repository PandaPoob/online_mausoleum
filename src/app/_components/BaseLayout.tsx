function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <nav className="bg-white">
          <ul>
            <li>Om Online Mausoleum</li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}

export default BaseLayout;
