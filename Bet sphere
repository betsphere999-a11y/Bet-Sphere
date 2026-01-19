import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dice, Spade, Club, Diamond } from "lucide-react";

export default function CasinoWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          BetSphere
        </motion.h1>
        <p className="max-w-2xl text-lg text-purple-200 mb-6">
          Experience elite online gaming with premium slots, fish games, and live action.
        </p>
        <div className="mb-6 px-6 py-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/30">
  <h3 className="text-2xl font-bold text-yellow-400">🎁 Welcome Bonus 100%</h3>
  <p className="text-purple-200">Double your first deposit instantly</p>
</div>

<a
  href="https://www.facebook.com/profile.php?id=61574157442940"
  className="block mb-8"
>
  <div className="px-6 py-4 rounded-2xl bg-green-500/10 border border-green-500/30 hover:border-green-400 hover:scale-[1.02] transition cursor-pointer">
    <h3 className="text-2xl font-bold text-green-400">💸 $2 Free Play</h3>
    <p className="text-purple-200">Redeemable free play for all new customers</p>
    <p className="mt-2 text-xs text-purple-400">
      * New customers only · One-time redeem · Contact support to claim
    </p>
    <span className="mt-3 inline-block text-sm font-semibold text-green-300">Claim Free Play →</span>
  </div>
</a>
        
      </section>

      {/* Games Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
  { name: "🎮 Orion Stars", url: "https://example.com/orion-stars" },
  { name: "🌌 Milky Way", url: "https://example.com/milky-way" },
  { name: "🔥 Firekirin", url: "https://example.com/firekirin" },
  { name: "💎 Juwa", url: "https://example.com/juwa" },
  { name: "🏰 Game Vault 999", url: "https://example.com/game-vault-999" },
  { name: "🐼 Panda Master", url: "https://example.com/panda-master" },
  { name: "🐯 Ultrapanda", url: "https://example.com/ultrapanda" },
  { name: "🔗 VbLink", url: "https://example.com/vblink" },
  { name: "🧿 E-Game", url: "https://example.com/e-game" },
  { name: "🏟️ Game Room", url: "https://example.com/game-room" }
].map((game, i) => (
  <a
    key={i}
    href={game.url}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <Card className="bg-purple-950 border-yellow-500/30 rounded-2xl shadow-xl hover:scale-105 hover:border-yellow-400 transition cursor-pointer">
      <CardContent className="flex flex-col items-center justify-center py-10 gap-3">
        <h3 className="text-xl font-semibold text-yellow-400">{game.name}</h3>
        <span className="text-sm text-purple-300">Play Now →</span>
      </CardContent>
    </Card>
  </a>
))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-purple-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-purple-200 text-lg">
            BetSphere delivers premium gaming with top-tier security, fair play, and a luxurious atmosphere.
            Whether online or in-person, we bring excitement you can trust.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-purple-200 mb-4">Questions, partnerships, or VIP access? Reach us anytime at</p>
          <div className="flex flex-col items-center gap-4">
  <a
    href="mailto:betsphere999@gmail.com"
    className="text-yellow-400 text-lg font-semibold hover:underline"
  >
    betsphere999@gmail.com
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61574157442940"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 font-bold hover:bg-yellow-500/30 hover:scale-105 transition"
  >
    <span className="font-extrabold">Bet Sphere</span> Official
  </a>
</div>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30">
            <span className="text-yellow-400 font-bold">🕒 24/7 Support</span>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="py-6 text-center text-yellow-400 text-sm border-t border-yellow-500/20">
        © 2026 BetSphere Online Casino. All rights reserved.
      </footer>
    </div>
  );
}
