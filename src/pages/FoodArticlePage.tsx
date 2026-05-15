import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { foods } from "../data/foods";

export default function FoodArticlePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const food = foods.find((f) => f.id === id);
  const currentIndex = foods.findIndex((f) => f.id === id);
  const prev = currentIndex > 0 ? foods[currentIndex - 1] : null;
  const next = currentIndex < foods.length - 1 ? foods[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!food) {
    return (
      <main className="pt-16 min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🍽️</div>
          <h1 className="font-playfair text-3xl text-stone-900 font-bold mb-4">Dish Not Found</h1>
          <p className="font-inter text-stone-500 mb-6">We couldn't find that article.</p>
          <button
            onClick={() => navigate("/dishes")}
            className="bg-amber-800 text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-amber-700 transition-colors"
          >
            Browse All Dishes
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-16 bg-white">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${food.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        <div className="relative z-10 w-full px-4 pb-12 max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6 text-white/60 font-inter text-xs tracking-wide">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/dishes" className="hover:text-white transition-colors">All Dishes</Link>
            <span>/</span>
            <span className="text-white/90">{food.name}</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-amber-500 text-white text-xs font-inter font-semibold px-3 py-1 rounded-full">
              {food.category}
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white/90 text-xs font-inter px-3 py-1 rounded-full">
              {food.region}
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white/90 text-xs font-inter px-3 py-1 rounded-full">
              {food.readTime}
            </span>
          </div>

          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl text-white font-bold leading-[1.05] mb-3">
            {food.name}
          </h1>
          {food.malay && (
            <div className="font-playfair text-amber-300/80 text-xl italic mb-3">{food.malay}</div>
          )}
          <p className="font-lora text-white/75 text-xl sm:text-2xl italic leading-relaxed max-w-2xl">
            {food.tagline}
          </p>
        </div>
      </section>

      {/* SEO Meta Description Block */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <p className="font-inter text-stone-600 text-sm leading-relaxed">{food.seoDescription}</p>
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-4 py-16">
        {/* Intro */}
        <div className="mb-14">
          <div className="w-10 h-0.5 bg-amber-500 mb-8" />
          <p className="font-lora text-xl sm:text-2xl text-stone-800 leading-relaxed">
            {food.intro}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-14 pb-8 border-b border-stone-100">
          {food.tags.map((tag) => (
            <span key={tag} className="font-inter text-xs text-amber-800 bg-amber-100 px-3 py-1 rounded-full font-medium">
              #{tag.toLowerCase().replace(/\s+/g, "")}
            </span>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-14">
          {food.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="font-playfair text-2xl sm:text-3xl text-stone-900 font-bold mb-5 leading-tight">
                {section.heading}
              </h2>
              {section.body.split("\n\n").map((para, pIdx) => (
                <p key={pIdx} className="font-lora text-stone-700 text-lg leading-[1.85] mb-5">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Pull Quote */}
        <div className="my-16 relative">
          <div className="absolute -left-2 top-0 bottom-0 w-1 bg-amber-500 rounded-full" />
          <blockquote className="pl-8">
            <p className="font-playfair text-2xl sm:text-3xl italic text-amber-900 leading-relaxed">
              "In Malaysia, food is not just sustenance. It is the architecture of belonging."
            </p>
            <footer className="mt-4 font-inter text-sm text-stone-400 tracking-widest uppercase">
              — Makan Malaysia Editorial
            </footer>
          </blockquote>
        </div>

        {/* Best Time */}
        <div className="bg-stone-50 rounded-2xl p-6 mb-14 border border-stone-100">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">⏰</span>
            <h3 className="font-playfair text-xl font-bold text-stone-800">Best Time to Eat</h3>
          </div>
          <p className="font-inter text-stone-600 leading-relaxed">{food.bestTime}</p>
        </div>

        {/* Tourist Tips */}
        <div className="mb-14">
          <h2 className="font-playfair text-2xl sm:text-3xl text-stone-900 font-bold mb-6">
            Essential Tips for Travellers
          </h2>
          <div className="space-y-4">
            {food.touristTips.map((tip, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="font-playfair text-amber-800 font-bold text-sm">{idx + 1}</span>
                </div>
                <p className="font-inter text-stone-600 leading-relaxed text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Where To Eat */}
        <div className="mb-14">
          <h2 className="font-playfair text-2xl sm:text-3xl text-stone-900 font-bold mb-6">
            Where to Eat It
          </h2>
          <div className="space-y-5">
            {food.whereTo.map((place, idx) => (
              <div key={idx} className="border border-stone-200 rounded-xl p-5 hover:border-amber-300 transition-colors bg-white">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <h3 className="font-playfair text-lg font-bold text-stone-800">{place.name}</h3>
                  <span className="flex-shrink-0 font-inter text-xs text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                    📍 {place.location}
                  </span>
                </div>
                <p className="font-inter text-stone-500 text-sm leading-relaxed">{place.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing line */}
        <div className="border-t border-stone-100 pt-10 text-center">
          <div className="text-4xl mb-4">🇲🇾</div>
          <p className="font-lora italic text-stone-500 text-lg leading-relaxed">
            The best way to understand Malaysia is to eat it. Slowly. Loudly. With strangers who quickly become familiar.
          </p>
        </div>
      </article>

      {/* Article Navigation */}
      <section className="border-t border-stone-100 bg-stone-50 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-stretch gap-4 justify-between">
          {prev ? (
            <Link
              to={`/dish/${prev.id}`}
              className="group flex-1 bg-white border border-stone-200 rounded-xl p-5 hover:border-amber-300 hover:shadow-md transition-all"
            >
              <div className="font-inter text-xs text-stone-400 mb-2 tracking-widest uppercase">← Previous</div>
              <div className="font-playfair text-lg font-bold text-stone-800 group-hover:text-amber-800 transition-colors">{prev.name}</div>
              <div className="font-lora italic text-stone-400 text-sm mt-1">{prev.tagline}</div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          <div className="flex items-center justify-center">
            <Link
              to="/dishes"
              className="flex-shrink-0 bg-amber-800 hover:bg-amber-700 text-white font-inter font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
            >
              All Dishes
            </Link>
          </div>

          {next ? (
            <Link
              to={`/dish/${next.id}`}
              className="group flex-1 bg-white border border-stone-200 rounded-xl p-5 hover:border-amber-300 hover:shadow-md transition-all text-right"
            >
              <div className="font-inter text-xs text-stone-400 mb-2 tracking-widest uppercase">Next →</div>
              <div className="font-playfair text-lg font-bold text-stone-800 group-hover:text-amber-800 transition-colors">{next.name}</div>
              <div className="font-lora italic text-stone-400 text-sm mt-1">{next.tagline}</div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </section>

      {/* Related Dishes */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl text-stone-900 font-bold mb-8">More Malaysian Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foods
              .filter((f) => f.id !== food.id)
              .slice(0, 3)
              .map((f) => (
                <Link
                  key={f.id}
                  to={`/dish/${f.id}`}
                  className="group flex gap-4 bg-stone-50 rounded-xl p-4 hover:bg-amber-50 transition-colors border border-stone-100 hover:border-amber-200"
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                    <img src={f.image} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-inter text-xs text-amber-600 mb-1">{f.category}</div>
                    <h3 className="font-playfair text-base font-bold text-stone-800 group-hover:text-amber-800 transition-colors leading-tight">{f.name}</h3>
                    <p className="font-lora italic text-stone-400 text-xs mt-1 line-clamp-2">{f.tagline}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
