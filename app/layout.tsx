import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Posts app",
  description: "Laget av fine twoday folk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{
        scrollbarGutter: "stable",
      }}
    >
      <body className={inter.className}>
        <header className="bg-slate-800 text-white">
          <nav className="container mx-auto py-4 flex items-center justify-between">
            <Link href="/" className="text-3xl">
              Post app
            </Link>

            <div className="flex gap-2">
              <Link href="/posts">Posts</Link>
              <Link href="/about">About</Link>
            </div>
          </nav>
        </header>

        <main className="container mx-auto py-4">{children}</main>
      </body>
    </html>
  );
}
