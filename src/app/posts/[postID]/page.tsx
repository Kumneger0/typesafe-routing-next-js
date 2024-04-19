import React from "react";
import { notFound } from "next/navigation";
import { posts } from "@/db/db";

const getPost = async (id: string) => {
  const post = posts.find(({ id: pid }) => id == String(pid));
  return post;
};

async function PostIdPage({ params }: { params: { postID: string } }) {
  if (!params.postID) {
    notFound();
  }
  const post = await getPost(params.postID);

  if (!post) {
    notFound();
  }

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
