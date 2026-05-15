import { Link } from "react-router-dom";
import { foods } from "../data/foods";

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍃</span>
              <div>
                <div className="font-playfair text-xl font-bold text-amber-200">Makan Malaysia</div>
                <div className="text-xs text-amber-500 tracking-widest uppercase">Stories Behind Every Plate</div>
              </div>
            </div>
            <p className="text-amber-300/70 text-sm leading-relaxed font-inter">
              A premium travel-food editorial celebrating the flavours, heritage, and soul of Malaysian cuisine — one dish at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-amber-200 font-semibold mb-4 text-lg">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-amber-300/70 hover:text-amber-200 text-sm font-inter transition-colors">Home</Link></li>
              <li><Link to="/dishes" className="text-amber-300/70 hover:text-amber-200 text-sm font-inter transition-colors">All Dishes</Link></li>
              <li><Link to="/about" className="text-amber-300/70 hover:text-amber-200 text-sm font-inter transition-colors">About This Journal</Link></li>
            </ul>
          </div>

          {/* Featured Dishes */}
          <div>
            <h4 className="font-playfair text-amber-200 font-semibold mb-4 text-lg">Featured Articles</h4>
            <ul className="space-y-2">
              {foods.slice(0, 6).map((f) => (
                <li key={f.id}>
                  <Link
                    to={`/dish/${f.id}`}
                    className="text-amber-300/70 hover:text-amber-200 text-sm font-inter transition-colors"
                  >
                    {f.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-amber-600 text-xs font-inter">
            © {new Date().getFullYear()} Makan Malaysia. A food editorial journal.
          </p>
          <p className="text-amber-600 text-xs font-inter">
            Written with love for Malaysian food culture 🇲🇾
          </p>
        </div>
      </div>
    </footer>
  );
}
