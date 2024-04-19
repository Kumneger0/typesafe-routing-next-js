import { PostsPostID } from "@/routes";
import React from "react";

function Posts({ id, title }: { id: number; title: string }) {
  return (
    <div key={id}>
      <PostsPostID.Link postID={String(id)}>
        <div className="text-xl text-blue-700 hover:text-blue-500 hover:underline">
          title : {title}
        </div>
      </PostsPostID.Link>
    </div>
  );
}

export default Posts;
