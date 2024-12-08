import type { Metadata } from "next";
import { Bitter, Inter } from "next/font/google";
import AuthProvider from "./_components/AuthProvider";
import "./globals.css";
import BaseLayout from "./_components/BaseLayout";

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--display-font",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--body-font",
});

export const metadata: Metadata = {
  title: "Dem vi mindes",
  description: "Se billeder af dem vi har mistet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body
        className={`${bitter.variable} ${inter.variable} antialiased text-dark`}
      >
        <AuthProvider>
          <BaseLayout>{children}</BaseLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
