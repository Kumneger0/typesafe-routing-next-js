import { z } from "zod";

export const Route = {
  name: "PostsPostID",
  params: z.object({
    postID: z.string(),
  }),
};
