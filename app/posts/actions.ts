"use server"

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";



export const deleteAction = async (id: number) => {


    await sql`DELETE FROM posts WHERE id = ${id}`;
    revalidatePath("/posts");
  }