"use client";

import { useState } from "react";
import Search from "./Search";

function Body() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <section className="bg-black ml-24 py-4 space-y-8 md:max-w-6xl grow md:mr-2.5">
      <Search search={search} setSearch={setSearch} />
      <div className="grid overflow-y-scroll scrollbar-hide h-96 py-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4">
        
      </div>

      <div className="flex gap-x-8 absolute min-w-full md:relative ml-6">
        {/* Genres */}
        <div className="hidden xl:inline max-w-67.5">
          <h2 className="text-white font-bold mb-3">Genres</h2>
          <div className="flex gap-x-2 gap-y-2.5 flex-wrap mb-3">
            <div className="genre">Classic</div>
            <div className="genre">House</div>
            <div className="genre">Minimal</div>
            <div className="genre">Hip-hop</div>
            <div className="genre">Electronic</div>
            <div className="genre">Chillout</div>
            <div className="genre">Blues</div>
            <div className="genre">Country</div>
            <div className="genre">Techno</div>
          </div>
          <button className="btn">All Genres</button>
        </div>

        {/* Tracks */}
        <div>
          <h2 className="text-white font-bold mb-3">
          </h2>
          <div className="space-y-3 border-2 border-[#262626] rounded-2xl p-3 bg-[#0D0D0D] overflow-y-scroll h-250 md:h-96 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full scrollbar-hover:scrollbar-thumb-gray-500 w-207.5">
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;