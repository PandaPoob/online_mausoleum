function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Om Online Mausoleum</li>
          </ul>
        </nav>
      </header>
      <main className="bg-white px-2">{children}</main>
    </>
  );
}

export default BaseLayout;
