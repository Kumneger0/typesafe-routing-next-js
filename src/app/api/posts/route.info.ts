import { z } from "zod";

export const Route = {
  name: "ApiPosts",
  params: z.object({}),
  search: z.object({ limit: z.number().nullable() }),
};

export const GET = {
  result: z.array(
    z.object({
      userId: z.string().or(z.number()),
      id: z.string().or(z.number()),
      title: z.string(),
      body: z.string(),
    })
  ),
};
