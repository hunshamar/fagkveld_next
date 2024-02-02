import { sql } from "@vercel/postgres";
import { MyPost } from "./post";
import { NewPostForm } from "./new-post-form";

export type Post = {
  id: number;
  title: string;
  content: string;
  like_count: number;
};

export default async function Page() {
  const { rows: posts } = await sql`SELECT * FROM posts ORDER BY id`;

  // wait 500 ms
  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <NewPostForm />
      <ul>
        {(posts as Post[]).map((post: Post) => (
          <MyPost key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
