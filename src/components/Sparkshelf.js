import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { IoMdLink } from "react-icons/io";


export default function Sparkshelf() {
  const [filter, setFilter] = useState("All");
  const items = [
    {
      title: "Attention Is All You Need",
      url: "https://arxiv.org/abs/1706.03762",
      type: "Paper",
      source: "arXiv",
      note: "The transformer paper that shaped modern NLP.",
      tags: ["ML", "NLP"],
      date: "2023-05-14",
    },
    {
      title: "How Uber Eats Scaled Search to Handle Billions of Daily Queries",
      url: "https://hw.glich.co/p/how-uber-eats-scaled-search-to-handle-billions-of-daily-queries",
      type: "Article",
      source: "Hello world",
      note: "Uber Eats scaled search with indexing, geo-sharding, and ranking to handle billions fast.",
      tags: ["H3 Hexes","Sharding", "Scaling"],
      date: "2023-06-10",
    },
  ];

  const filtered = filter === "All" ? items : items.filter(i => i.type === filter);

  return (
     <div className='grid sm:grid-cols-4 gap-4'>
          <Sidebar />
      <div className="h- screen flex flex-col col-span-3 px-4 py-8  text-gray-900 dark:text-gray-100">
        {/* Header */}
        <header className="mb-6 border-b border-gray-300 dark:border-gray-700 pb-3">
          <h1 className="text-3xl font-semibold tracking-tight">Sparkshelf</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Curated references and notes—papers, threads, and ideas shaping my work.
          </p>
        </header>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {["All", "Paper", "Video", "Thread", "Project", "Article"].map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-2 py-0.5 text-sm border rounded 
                ${filter === t ? "bg-gray-200 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-800"}
              `}
            >
              {t}
            </button>
          ))}
          <input
            type="search"
            placeholder="Search..."
            className="px-2 py-1 text-sm border rounded bg-transparent"
          />
        </div>

        {/* Featured row */}
        <section className="mb-10">
          <h2 className="text-lg font-medium mb-3 border-b border-gray-300 dark:border-gray-700 pb-1">
            Featured
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.slice(0, 3).map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                className="p-4 border rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-400">{item.note}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Main list */}
        <main className="space-y-4">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-4 border rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <a
                href={item.url}
                className="group text-base font-medium hover:underline flex items-center gap-1"
              >
                {item.title}
                <IoMdLink  className="w-5 h-5 opacity-0 group-hover:opacity-100 text-black transition" />
              </a>
              <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">{item.note}</p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span>{item.type}</span>•<span>{item.source}</span>•<span>{item.date}</span>
                {item.tags.map(tag => (
                  <span key={tag} className="px-1 py-0.5 border rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-10 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 pt-3">
          <button className="px-2 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800 mr-2">
            Export CSV/JSONx
          </button>
          <span>Sparkshelf: my quiet archive of references and notes.</span>
        </footer>
      </div>
    </div>
  );
}
