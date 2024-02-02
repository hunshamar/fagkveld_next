"use client";

import { Post } from "./page";
import { deleteAction, likeAction } from "./actions";
import { useOptimistic } from "react";

type Props = {
  post: Post;
};

export const MyPost = ({ post }: Props) => {
  const [likeCount, setLikeCount] = useOptimistic(post.like_count);

  return (
    <li key={post.id} className="border-2 border-gray-200 rounded-lg p-4 mb-4">
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-2">{post.content}</p>
      <p className="text-gray-500">{likeCount} likes</p>

      <div>
        <input type="hidden" name="id" value={post.id} />

        <button
          onClick={() => {
            setLikeCount(likeCount + 1);
            likeAction(post.id);
          }}
        >
          👍
        </button>

        <button
          className="bg-red-600 text-white p-4 border rounded m-2"
          onClick={() => deleteAction(post.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
