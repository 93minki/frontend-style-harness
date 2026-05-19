"use client";

import { FormEvent, useState } from "react";

export function PostForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const isSubmitDisabled = title.trim().length === 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitDisabled) {
      return;
    }

    console.log({
      title,
      description,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block space-y-2">
        <span className="text-sm font-medium">제목</span>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full rounded-md border px-3 py-2"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium">설명</span>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="w-full rounded-md border px-3 py-2"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitDisabled}
        className={`rounded-md px-4 py-2 text-sm font-medium ${
          isSubmitDisabled
            ? "cursor-not-allowed bg-gray-200 text-gray-500"
            : "bg-black text-white"
        }`}
      >
        저장
      </button>
    </form>
  );
}

