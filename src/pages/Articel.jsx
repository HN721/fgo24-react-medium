import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";

export default function Articel({ articel }) {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 3;
  const { register, handleSubmit } = useForm();
  const [search, setSearch] = useSearchParams();
  const navigate = useNavigate();

  function handleDisplay(query = "") {
    const filtered = articel.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
    setCount(filtered.length);
    setCurrentPage(1);
  }

  function handleClick(id, username, slug) {
    navigate(`/Aricel/@${username}/${slug}`);
  }

  function handleSearch(value) {
    setSearch(value);
    handleDisplay(value.query);
  }

  useEffect(() => {
    const query = search.get("query") || "";
    handleDisplay(query);
  }, [search, articel]);

  useEffect(() => {
    const offset = (currentPage - 1) * limit;
    const pageData = filteredData.slice(offset, offset + limit);
    setData(pageData);
  }, [currentPage, filteredData]);

  const totalPages = Math.ceil(count / limit);

  return (
    <>
      <Navbar />
      <form className="w-59 mx-12 mt-12" onSubmit={handleSubmit(handleSearch)}>
        <div className="flex border-1 items-center p-2 gap-2 rounded-lg">
          <Search />
          <input
            type="text"
            autoFocus={search.get("query")}
            defaultValue={search.get("query")}
            placeholder="Masukan Judul Articel"
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
        {data.map((e, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row bg-white shadow-md rounded-xl p-4 gap-4"
          >
            <div className="flex-1">
              <p className="text-sm text-gray-500">Author: {e.author}</p>
              <h2 className="text-lg font-semibold">{e.title}</h2>
              <p className="text-gray-700">
                {e.body.length > 60 ? e.body.substring(0, 60) + "..." : e.body}
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

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6 mb-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
