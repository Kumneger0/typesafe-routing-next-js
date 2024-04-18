import React from "react";
import { Post } from "../page";
import { notFound } from "next/navigation";

const getPost = async (id: string) => {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return (await responce.json()) as Post;
};

async function PostIdPage({ params }: { params: { postID: string } }) {
  if (!params.postID) {
    notFound();
  }

  const post = await getPost(params.postID);
  return (
    <div>
      <div className="font-bold text-xl">{post.title}</div>
      <div className="w-full h-auto border border-black rounded-xl p-12">
        {post.body}
      </div>
    </div>
  );
}

export default PostIdPage;
