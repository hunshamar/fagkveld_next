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
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-slate-800 text-white">
          <ul className="flex justify-between items-center gap-2 p-4  mx-auto">
            <li>
              <Link href="/" className="text-3xl">
                Home
              </Link>
            </li>
            <div className="flex gap-2">
              <li>
                <Link href="/posts">Posts</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </div>
          </ul>
        </header>

        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
