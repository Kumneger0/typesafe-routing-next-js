import React from "react";
import { PostsPostID, getApiPosts } from "@/routes";
import { posts } from "@/db/db";
import Posts from "@/components/posts";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function PostsPage() {
  const data = await new Promise<typeof posts>((res) =>
    setTimeout(() => res(posts), 200)
  );

  return (
    <div>
      <h1 className="font-bold text-2xl my-2 py-2">Server Componenet</h1>
      <div>
        {data.map(({ body, id, title, userId }) => {
          return <Posts key={id} id={id} title={title} />;
        })}
      </div>
    </div>
  );
}

export default PostsPage;
