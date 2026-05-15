import { Link } from "react-router-dom";
import { useState } from "react";
import { foods } from "../data/foods";

const allCategories = ["All", ...Array.from(new Set(foods.map((f) => f.category)))];

export default function DishesPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? foods : foods.filter((f) => f.category === active);

  return (
    <main className="pt-16 min-h-screen bg-stone-50">
      {/* Page Header */}
      <section className="bg-amber-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-inter text-xs text-amber-400 tracking-widest uppercase mb-4 font-medium">
            The Full Archive
          </div>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold mb-5">
            All Malaysian Dishes
          </h1>
          <p className="font-lora text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Long-form editorial articles on every iconic dish in Malaysia — their origins, their people, their regional souls, and exactly where to eat them.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 z-30 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-inter font-medium transition-all ${
                active === cat
                  ? "bg-amber-800 text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-amber-50 hover:text-amber-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="mb-6 font-inter text-sm text-stone-400">
          {filtered.length} {filtered.length === 1 ? "article" : "articles"} found
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((food) => (
            <Link
              key={food.id}
              to={`/dish/${food.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={food.image}
                  alt={food.heroAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-inter font-semibold px-3 py-1 rounded-full">
                  {food.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-sm text-white/80 text-xs font-inter px-2.5 py-1 rounded-full">
                  {food.readTime}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="font-inter text-xs text-stone-400 mb-2 tracking-wide">
                  {food.region}
                </div>
                <h2 className="font-playfair text-2xl text-stone-900 font-bold group-hover:text-amber-800 transition-colors mb-1 leading-tight">
                  {food.name}
                </h2>
                <p className="font-lora italic text-amber-700/80 text-sm mb-3">{food.tagline}</p>
                <p className="font-inter text-stone-500 text-sm leading-relaxed line-clamp-3 flex-1">
                  {food.intro}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
                  {food.tags.map((tag) => (
                    <span key={tag} className="text-xs font-inter text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-amber-700 font-inter text-sm font-semibold group-hover:gap-3 transition-all mt-auto pt-4 border-t border-stone-100">
                  Read full article <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
