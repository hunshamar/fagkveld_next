"use client";

import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
        pending ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={pending}
    >
      {pending ? "laster..." : "Create post"}
    </button>
  );
};
