import React from "react";
import { Home } from "@/routes";

function Header() {
  return (
    <div className="w-full flex items-center p-5 my-2 gap-5">
      <div className="p-2 mx-3">
        <Home.Link>Home</Home.Link>
      </div>
      <div className="p-2 mx-3"></div>
    </div>
  );
}

export default Header;
