import type { Metadata } from "next";
import { Bitter, Inter, Permanent_Marker } from "next/font/google";
import AuthProvider from "./_components/AuthProvider";
import "./globals.css";
import BaseLayout from "./_components/BaseLayout";

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--primary-font",
});

const permanent_marker = Permanent_Marker({
  subsets: ["latin"],
  variable: "--secondary-font",
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--body-font",
});

export const metadata: Metadata = {
  title: "Dem vi mindes",
  description: "Se billeder af dem vi har mistet",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body
        className={`${bitter.variable} ${permanent_marker.variable} ${inter.variable} antialiased text-dark`}
      >
        <AuthProvider>
          <BaseLayout>{children}</BaseLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
