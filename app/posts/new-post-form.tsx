import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export function NewPostForm() {
  const createPostAction = async (formData: FormData) => {
    "use server";

    await sql`INSERT INTO posts (title, content) VALUES (${
      formData.get("title") as string
    }, ${formData.get("content") as string})`;

    revalidatePath("/posts");
  };

  return (
    <form
      action={createPostAction}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="title"
          id="title"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="content"
        >
          Content
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="content"
          id="content"
        />
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Create post
        </button>
      </div>
    </form>
  );
}
