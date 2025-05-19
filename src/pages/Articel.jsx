import React from "react";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";

export default function Articel({ articel }) {
  const navigate = useNavigate();
  function handleClick(id, username, slug) {
    navigate(`/Aricel/@${username}/${slug}`);
    console.log(id);
  }
  const limit = 60;

  return (
    <>
      <Navbar />
      <div className="px-6 py-4 grid gap-6">
        {articel.map((e, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row bg-white shadow-md rounded-xl p-4 gap-4"
          >
            <div className="flex-1">
              <p className="text-sm text-gray-500">{e.username}</p>
              <h2 className="text-lg font-semibold">{e.title}</h2>
              <p className="text-gray-700">
                {e.body.length > limit
                  ? e.body.substring(0, limit) + "..."
                  : e.body}
              </p>
              <button
                type="button"
                onClick={() => {
                  handleClick(i, e.username, e.slug);
                }}
              >
                Read more
              </button>
            </div>
            <div className="flex-shrink-0">
              <img
                src={e.img}
                alt={e.title}
                className="w-40 h-40 object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
