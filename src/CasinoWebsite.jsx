import { motion } from "framer-motion";

export default function CasinoWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-black text-white">

      {/* Hero */}
      <section className="flex flex-col items-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          BetSphere
        </motion.h1>

        <p className="max-w-xl text-purple-200 mb-6">
          Experience elite online gaming with premium slots and fish games.
        </p>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl px-6 py-4 mb-6">
          <h3 className="text-2xl font-bold text-yellow-400">🎁 Welcome Bonus 100%</h3>
          <p>Double your first deposit</p>
        </div>

        <a
          href="https://www.facebook.com/profile.php?id=61574157442940"
          target="_blank"
          className="bg-green-500/20 border border-green-500/40 px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          💸 $2 Free Play – Claim Now
        </a>
      </section>

      {/* Games */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Games</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Orion Stars",
            "Milky Way",
            "Firekirin",
            "Juwa",
            "Game Vault 999",
            "Panda Master",
          ].map((game, i) => (
            <div
              key={i}
              className="bg-purple-950 border border-yellow-500/30 rounded-xl p-8 text-center hover:scale-105 transition"
            >
              <h3 className="text-yellow-400 font-bold">{game}</h3>
              <p className="text-purple-300 text-sm mt-2">Play Now →</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-yellow-400 text-sm border-t border-yellow-500/20">
        © 2026 BetSphere. All rights reserved.
      </footer>
    </div>
  );
}
