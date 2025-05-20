import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ArticelDetail({ articel }) {
  const { username } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const filtered = articel.filter((item) => `@${item.username}` === username);
    setData(filtered);
  }, [username, articel]);

  if (data.length === 0) {
    return <div className="text-center mt-10">Artikel tidak ditemukan.</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-8 p-8">
        {data.map((e, i) => (
          <div key={i} className="bg-white shadow-md p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">{e.title}</h2>

            <p className="text-sm text-gray-500">{e.username}</p>
            <div className="flex justify-center">
              <img
                src={e.img}
                alt={e.title}
                className="w-full max-w-md h-auto object-cover rounded-md my-4"
              />
            </div>
            <p className="text-gray-700">{e.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
