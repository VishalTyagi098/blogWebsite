import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center text-2xl h-[8vh] w-full bg-[#212529] text-white px-4">
      <div className=""><Link to="/" className="font-bold hover:text-white">blogWebsite</Link></div>

      <div className="ml-auto text-lg">
        <Link className="hover:text-[#848383] mx-2" to="/tech/">
          Technology
        </Link>
        <Link className="hover:text-[#848383] mx-2" to="/food/">
          Food
        </Link>
        <Link className="hover:text-[#848383] mx-2" to="/nature/">
          Nature
        </Link>
      </div>
    </div>
  );
}
