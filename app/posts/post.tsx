import { sql } from "@vercel/postgres";
import { Post } from "./page";
import { revalidatePath } from "next/cache";
import { deleteAction } from "./actions";

type Props = {
  post: Post;
};

export const MyPost = ({ post }: Props) => {
  const deleteActionWithId = deleteAction.bind(null, post.id);

  return (
    <li key={post.id} className="border-2 border-gray-200 rounded-lg p-4 mb-4">
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-2">{post.content}</p>
      <p className="text-gray-500">{post.like_count} likes</p>

      <form>
        <input type="hidden" name="id" value={post.id} />

        <button
          className="bg-red-600 text-white p-4 border rounded m-2"
          formAction={deleteActionWithId}
        >
          Delete
        </button>
      </form>
    </li>
  );
};
