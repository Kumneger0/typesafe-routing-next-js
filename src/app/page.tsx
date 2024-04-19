"use client";
import EachPost from "@/components/posts";
import { getApiPosts } from "@/routes";

import React, { useEffect, useState } from "react";

function Post() {
  const [posts, setPosts] = useState<Awaited<ReturnType<typeof getApiPosts>>>(
    []
  );

  const [limit, setLimit] = useState<number | null>(null);

  useEffect(() => {
    getApiPosts({}, { limit }).then(setPosts);
  }, [limit]);

  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl ">API Route Example</h1>
      </div>
      <div>
        <input
          type="number"
          placeholder="Add limit"
          className="p-3 rounded-xl border border-black"
          onChange={(e) => setLimit(Number(e.target.value))}
        />
      </div>
      <div>
        {posts?.map(({ id, title }) => (
          <EachPost id={Number(id)} title={title} key={id} />
        ))}
      </div>
    </div>
  );
}

export default Post;
