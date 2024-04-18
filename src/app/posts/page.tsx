import React from "react";
import { PostsPostID } from "@/routes";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getPosts = async () => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  return (await responce.json()) as Array<Post>;
};

async function PostsPage() {
  const posts = await getPosts();
  return (
    <div>
      {posts.map(({ body, id, title, userId }) => {
        return (
          <div key={id}>
            <PostsPostID.Link postID={String(id)}>
              <div className="text-xl text-blue-700 hover:text-blue-500 hover:underline">
                title : {title}
              </div>
            </PostsPostID.Link>
          </div>
        );
      })}
    </div>
  );
}

export default PostsPage;
