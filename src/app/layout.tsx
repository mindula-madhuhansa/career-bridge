import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Career Bridge",
  description: "A bridge to your dream career",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main className="pt-8 bg-gray-50">
          <div className="max-w-5xl mx-auto p-4 lg:p-0">{children}</div>
        </main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
