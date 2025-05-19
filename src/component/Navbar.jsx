import { Bell, Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
Search;
export default function Navbar() {
  return (
    <div className="flex justify-between mx-12 mt-6 items-center">
      <Link to={"/"}>
        <div className="text-6xl font-serif font-bold">Medium</div>
      </Link>
      <div className="flex gap-6 items-center">
        <div className="flex gap-6">
          <Bell />
          <p className="font-serif font-bold">Hosea</p>
        </div>
      </div>
    </div>
  );
}
