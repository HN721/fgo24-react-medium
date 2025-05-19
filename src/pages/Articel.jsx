import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";

export default function Articel({ articel }) {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const { register, handleSubmit } = useForm();
  const [search, setSearch] = useSearchParams();
  const navigate = useNavigate();
  function handleDisplay(limit = 3, page = 1, query) {
    const offset = (page - 1) * limit;
    const display = articel.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
    console.log(articel);
    console.log(display);
    setCount(display.length);
    setData(display);
  }
  function handleClick(id, username, slug) {
    navigate(`/Aricel/@${username}/${slug}`);
    console.log(id);
  }
  function handleSearch(value) {
    setSearch(value);
    handleDisplay(3, 1, value.query);
  }
  const limit = 60;
  useEffect(() => {
    const query = search.get("query")?.toLowerCase() || "";
    handleDisplay(limit, 1, query);
  }, [search]);
  return (
    <>
      <Navbar />
      <form className="w-59 mx-12 mt-12" onSubmit={handleSubmit(handleSearch)}>
        <div className="flex border-1 items-center p-2 gap-2 rounded-lg">
          <Search />
          <input
            type="text"
            defaultValue={search.get("query")}
            {...register("query")}
            className="border-none outline-none"
          />
          <button className="hidden" type="submit" />
        </div>
      </form>
      <div className="mx-12 mt-5">
        {search.get("query") &&
          `Hasil Pencarian dari ${search.get("query")} (${count})`}
      </div>
      <div className="px-6 py-4 grid gap-6">
        {data.length < 1 ? (
          <p>Tidak ditemukan</p>
        ) : (
          data.map((e, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row bg-white shadow-md rounded-xl p-4 gap-4"
            >
              <div className="flex-1">
                <p className="text-sm text-gray-500">Author: {e.username}</p>
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
          ))
        )}
      </div>
    </>
  );
}
