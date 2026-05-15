import { Link } from "react-router-dom";
import { foods } from "../data/foods";

export default function HomePage() {
  const featured = foods.slice(0, 3);
  const rest = foods.slice(3);

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-malaysia.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-200 text-xs font-inter tracking-widest uppercase font-medium">A Malaysian Food Editorial</span>
          </div>

          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl text-white font-bold leading-[1.08] mb-6">
            Every Plate Has a<br />
            <em className="text-amber-300 italic">Story to Tell</em>
          </h1>

          <p className="font-lora text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
            From the banana-leaf kitchens of Negeri Sembilan to the smoky hawker stalls of Penang, 
            we write about Malaysian food the way it deserves — with heat, with history, and with heart.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/dishes"
              className="bg-amber-500 hover:bg-amber-400 text-white font-inter font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-900/40 text-sm tracking-wide"
            >
              Explore All Dishes →
            </Link>
            <Link
              to="/dish/nasi-lemak"
              className="border border-white/40 hover:border-white/70 text-white/90 hover:text-white font-inter font-medium px-8 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm text-sm"
            >
              Start with Nasi Lemak
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs font-inter tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* Intro Editorial Block */}
      <section className="bg-stone-50 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-px bg-amber-400 mx-auto mb-8" />
          <p className="font-lora text-xl sm:text-2xl text-stone-700 leading-relaxed italic">
            "Malaysian food is not a genre. It is a conversation — between Malay, Chinese, Indian, and Orang Asli traditions that have been talking to each other, borrowing from each other, and arguing with each other for five centuries."
          </p>
          <div className="mt-8 font-inter text-sm text-stone-400 tracking-widest uppercase">
            The Makan Malaysia Editorial
          </div>
          <div className="w-16 h-px bg-amber-400 mx-auto mt-8" />
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="font-inter text-xs text-amber-600 tracking-widest uppercase font-medium mb-2">
              Featured Stories
            </div>
            <h2 className="font-playfair text-4xl sm:text-5xl text-stone-900 font-bold">
              Start Your Journey Here
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featured.map((food) => (
              <Link key={food.id} to={`/dish/${food.id}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5">
                  <img
                    src={food.image}
                    alt={food.heroAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-inter font-semibold px-3 py-1 rounded-full tracking-wide">
                    {food.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white/80 text-xs font-inter px-3 py-1 rounded-full backdrop-blur-sm">
                    {food.readTime}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {food.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs font-inter text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-playfair text-2xl text-stone-900 font-bold group-hover:text-amber-800 transition-colors leading-tight">
                    {food.name}
                  </h3>
                  <p className="font-lora italic text-stone-500 text-sm">{food.tagline}</p>
                  <p className="font-inter text-stone-600 text-sm leading-relaxed line-clamp-3">
                    {food.intro}
                  </p>
                  <div className="flex items-center gap-2 text-amber-700 font-inter text-sm font-semibold pt-1 group-hover:gap-3 transition-all">
                    Read the full story <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map / Stats Banner */}
      <section className="bg-amber-950 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { num: "9+", label: "Iconic Dishes" },
            { num: "13", label: "Malaysian States" },
            { num: "3", label: "Culinary Traditions" },
            { num: "500+", label: "Years of History" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-playfair text-4xl sm:text-5xl text-amber-300 font-bold mb-1">{stat.num}</div>
              <div className="font-inter text-amber-600 text-sm tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Rest of dishes grid */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="font-inter text-xs text-amber-600 tracking-widest uppercase font-medium mb-2">
              More Stories
            </div>
            <h2 className="font-playfair text-4xl sm:text-5xl text-stone-900 font-bold">
              The Full Table
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((food) => (
              <Link key={food.id} to={`/dish/${food.id}`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100">
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={food.image}
                    alt={food.heroAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-stone-700 text-xs font-inter font-medium px-3 py-1 rounded-full">
                    {food.region}
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-inter text-xs text-amber-600 mb-1 tracking-wide">{food.category} · {food.readTime}</div>
                  <h3 className="font-playfair text-xl text-stone-900 font-bold group-hover:text-amber-800 transition-colors mb-1">{food.name}</h3>
                  <p className="font-lora italic text-stone-400 text-sm mb-3">{food.tagline}</p>
                  <p className="font-inter text-stone-500 text-sm leading-relaxed line-clamp-2">{food.intro}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-amber-700 font-inter text-sm font-semibold group-hover:gap-2.5 transition-all">
                    Read story <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/dishes"
              className="inline-flex items-center gap-2 bg-amber-800 hover:bg-amber-700 text-white font-inter font-semibold px-8 py-3.5 rounded-full transition-colors text-sm tracking-wide"
            >
              View All Dishes →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Editorial */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-6">🇲🇾</div>
          <h2 className="font-playfair text-3xl sm:text-4xl text-stone-900 font-bold mb-4">
            Malaysia Doesn't Have a Cuisine.<br />
            <em className="text-amber-700 italic">It Has a Conversation.</em>
          </h2>
          <p className="font-lora text-stone-600 text-lg leading-relaxed mb-8">
            Every hawker stall, every banana leaf, every clay pot tells the story of a country that built itself 
            through the act of cooking together. Come hungry. Leave with a story.
          </p>
          <Link
            to="/about"
            className="font-inter text-sm text-amber-700 border-b-2 border-amber-300 hover:border-amber-600 transition-colors pb-0.5 font-medium"
          >
            About this editorial project →
          </Link>
        </div>
      </section>
    </main>
  );
}
