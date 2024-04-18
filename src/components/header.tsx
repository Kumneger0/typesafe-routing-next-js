import React from "react";
import { About, Posts, Home } from "@/routes";

function Header() {
  return (
    <div className="w-full flex items-center p-5 my-2 gap-5">
      <div className="p-2 mx-3">
        <Home.Link>Home</Home.Link>
      </div>
      <div className="p-2 mx-3">
        <Posts.Link>posts</Posts.Link>
      </div>
      <div className="p-2 mx-3">
        <About.Link>about</About.Link>
      </div>
    </div>
  );
}

export default Header;
