"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const deleteAction = async (id: number) => {
  await sql`DELETE FROM posts WHERE id = ${id}`;
  revalidatePath("/posts");
};

export const likeAction = async (id: number) => {
  await sql`UPDATE posts SET like_count = like_count + 1 WHERE id = ${id}`;
  revalidatePath("/posts");
};
