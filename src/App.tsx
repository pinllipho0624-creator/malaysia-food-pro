import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DishesPage from "./pages/DishesPage";
import FoodArticlePage from "./pages/FoodArticlePage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dishes" element={<DishesPage />} />
          <Route path="/dish/:id" element={<FoodArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center bg-stone-50 pt-16">
                <div className="text-center px-4">
                  <div className="text-7xl mb-6">🍜</div>
                  <h1 className="font-playfair text-4xl text-stone-900 font-bold mb-3">Page Not Found</h1>
                  <p className="font-inter text-stone-500 mb-8 text-lg">
                    This page seems to have wandered off to a hawker stall.
                  </p>
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 bg-amber-800 hover:bg-amber-700 text-white font-inter font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
                  >
                    Return Home →
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
