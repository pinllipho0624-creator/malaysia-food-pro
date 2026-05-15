import { Link } from "react-router-dom";
import { foods } from "../data/foods";

export default function AboutPage() {
  return (
    <main className="pt-16 bg-white">
      {/* Hero */}
      <section className="bg-amber-950 text-white py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-6">🍃</div>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold mb-5 leading-tight">
            About<br /><em className="text-amber-300 italic">Makan Malaysia</em>
          </h1>
          <p className="font-lora text-white/70 text-xl leading-relaxed">
            A travel-food editorial journal devoted to the stories that live inside Malaysian cooking.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        <div className="w-10 h-0.5 bg-amber-500 mb-10" />

        <p className="font-lora text-2xl text-stone-800 leading-relaxed mb-8">
          Makan Malaysia was born from a simple frustration: most writing about Malaysian food tells you <em>what</em> to eat, but almost nothing about <em>why</em> it matters.
        </p>

        <p className="font-inter text-stone-600 text-lg leading-relaxed mb-6">
          Malaysia has one of the most extraordinary food cultures on earth — a three-way conversation between Malay, Chinese, and Indian culinary traditions that has been evolving for five centuries. Each dish carries the fingerprints of migration, trade, colonialism, adaptation, and the particular genius of a country that learned to build identity through shared appetite.
        </p>

        <p className="font-inter text-stone-600 text-lg leading-relaxed mb-6">
          Yet most travel guides reduce nasi lemak to a bullet point, char kway teow to a restaurant recommendation, rendang to a checkbox on a food tour itinerary. This is a failure of attention. These dishes deserve the kind of writing that treats them the way a great piece of music is treated — with serious, emotionally engaged inquiry into what they are and why they move us.
        </p>

        <p className="font-inter text-stone-600 text-lg leading-relaxed mb-6">
          That is what Makan Malaysia does. Every article here is a long-form, editorial piece of food writing — not a recipe, not a review, not a list of facts. Each one is an attempt to understand a dish in its full cultural, historical, and emotional context, and to write about it with the kind of language that makes you feel something.
        </p>

        <div className="my-12 relative pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400 rounded-full" />
          <blockquote className="font-playfair text-2xl italic text-amber-900 leading-relaxed">
            "We believe that food writing, at its best, is a form of travel writing. And travel writing, at its best, is a form of love."
          </blockquote>
        </div>

        <p className="font-inter text-stone-600 text-lg leading-relaxed">
          We write for three kinds of readers: the traveller planning a first trip to Malaysia who wants to understand what they're about to encounter; the Malaysian diaspora who wants to read about home in words that match the weight of what home actually feels like; and the curious food lover anywhere in the world who wants to understand why people in Penang argue about nasi kandar the way other people argue about philosophy.
        </p>
      </section>

      {/* What We Cover */}
      <section className="bg-stone-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl sm:text-4xl text-stone-900 font-bold mb-3">What We Write About</h2>
          <p className="font-inter text-stone-500 mb-10 text-lg">Each article covers six essential dimensions of a dish.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📜", title: "Historical Origins", desc: "Where did this dish come from? Who made it first, and why? What trade route, migration wave, or colonial moment brought it to the table?" },
              { icon: "🗺️", title: "Regional Differences", desc: "How does Penang's version differ from Johor's? What does the east coast do that the west coast doesn't? Food is geography made edible." },
              { icon: "🤝", title: "Cultural Storytelling", desc: "The ethnic communities, the social rituals, the festivals and family meals that give each dish its deeper meaning beyond nutrition." },
              { icon: "🌅", title: "Local Eating Habits", desc: "When do Malaysians eat this? With what? At what kind of stall? The context of consumption is part of the dish itself." },
              { icon: "✈️", title: "Tourist Guidance", desc: "Practical, specific advice for visitors: where to go, what to order, what to avoid, what time to arrive, and how to eat it the right way." },
              { icon: "✍️", title: "Editorial Writing", desc: "Language that is descriptive, emotional, and specific. Writing that makes you taste the dish even before you've booked your flights." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-stone-100 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-playfair text-lg font-bold text-stone-800 mb-2">{item.title}</h3>
                <p className="font-inter text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dishes covered */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl sm:text-4xl text-stone-900 font-bold mb-2">Dishes in This Edition</h2>
          <p className="font-inter text-stone-400 mb-10">Every article is available now.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {foods.map((food) => (
              <Link
                key={food.id}
                to={`/dish/${food.id}`}
                className="group flex items-center gap-4 p-4 rounded-xl border border-stone-100 hover:border-amber-300 hover:bg-amber-50/50 transition-all"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={food.image} alt={food.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-inter text-xs text-amber-600 mb-0.5">{food.category} · {food.readTime}</div>
                  <div className="font-playfair text-base font-bold text-stone-800 group-hover:text-amber-800 transition-colors">{food.name}</div>
                  <div className="font-inter text-xs text-stone-400 mt-0.5">{food.region}</div>
                </div>
                <div className="text-amber-600 group-hover:translate-x-1 transition-transform font-inter text-sm">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Philosophy */}
      <section className="bg-amber-950 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-6 text-amber-200">Our Editorial Philosophy</h2>
          <div className="space-y-5 text-left">
            {[
              "We do not write recipes. We write about the people who cook and the cultures that shaped what they cook.",
              "We do not write reviews. We write about dishes as cultural phenomena — what they mean, not just what they taste like.",
              "We do not treat 'authentic' as a fixed category. Malaysian food has always been in motion — adapting, borrowing, evolving — and we celebrate that.",
              "We do not write for the SEO-first reader. We write for the curious, the hungry, and the human. SEO follows good writing; it does not lead it.",
              "We take the hawker stall as seriously as the Michelin-starred restaurant, because in Malaysia, they are often the same quality of experience.",
            ].map((point, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/30 border border-amber-500/50 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                </div>
                <p className="font-lora text-white/75 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/dishes"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-inter font-semibold px-8 py-3.5 rounded-full transition-colors text-sm tracking-wide"
            >
              Start Reading →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
