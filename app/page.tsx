import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold">Welcome to Posts app</h1>
        <p className="mt-3 text-2xl">
          Your one-stop solution for managing posts
        </p>
        <Link
          href="/posts"
          className="mt-5 px-4 py-2 font-semibold text-white bg-slate-800 rounded hover:bg-slate-700"
        >
          Go to Posts
        </Link>
      </div>
    </div>
  );
}
