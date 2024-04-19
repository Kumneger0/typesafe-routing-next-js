import type { NextApiRequest, NextApiResponse } from "next";
// Import the faker library
import { NextRequest, NextResponse } from "next/server";
import { posts } from "@/db/db";
export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(
  request: NextRequest
): Promise<NextResponse<Array<Post>>> {
  const limit = request.nextUrl.searchParams.get("limit");
  return NextResponse.json(limit ? posts.slice(0, Number(limit)) : posts);
}
