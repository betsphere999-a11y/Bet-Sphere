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
        <div className="mb-8 px-6 py-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/30">
          <h3 className="text-2xl font-bold text-yellow-400">🎁 Welcome Bonus 100%</h3>
          <p className="text-purple-200">Double your first deposit instantly</p>
        </div>
        <div className="flex gap-4">
          <Button className="rounded-2xl px-8 py-6 text-lg">Login</Button>
          <Button variant="outline" className="rounded-2xl px-8 py-6 text-lg">Register</Button>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["🎮 Orion Stars","🌌 Milky Way","🔥 Firekirin","💎 Juwa","🏰 Game Vault 999","🐼 Panda Master","🐯 Ultrapanda","🔗 VbLink","🧿 E-Game","🏟️ Game Room"].map((game, i) => (
            <Card key={i} className="bg-purple-950 border-yellow-500/30 rounded-2xl shadow-xl hover:scale-105 transition">
              <CardContent className="flex items-center justify-center py-10">
                <h3 className="text-xl font-semibold text-yellow-400">{game}</h3>
              </CardContent>
            </Card>
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
          <a href="mailto:betsphere999@gmail.com" className="text-yellow-400 text-lg font-semibold hover:underline">
            betsphere999@gmail.com
          </a>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30">
            <span className="text-yellow-400 font-bold">🕒 24/7 Support</span>
          </div>
        </div>
      </section>

      {/* Auth Section */}
      <section className="py-20 px-6 bg-purple-950">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="bg-purple-950 border-yellow-500/30 rounded-2xl">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Login</h3>
              <input placeholder="Email" className="w-full mb-3 p-3 rounded-xl bg-black/40 border border-yellow-500/20" />
              <input type="password" placeholder="Password" className="w-full mb-4 p-3 rounded-xl bg-black/40 border border-yellow-500/20" />
              <Button className="w-full rounded-2xl">Login</Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-950 border-yellow-500/30 rounded-2xl">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Register</h3>
              <input placeholder="Username" className="w-full mb-3 p-3 rounded-xl bg-black/40 border border-yellow-500/20" />
              <input placeholder="Email" className="w-full mb-3 p-3 rounded-xl bg-black/40 border border-yellow-500/20" />
              <input type="password" placeholder="Password" className="w-full mb-4 p-3 rounded-xl bg-black/40 border border-yellow-500/20" />
              <Button className="w-full rounded-2xl">Create Account</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-yellow-400 text-sm border-t border-yellow-500/20">
        © 2026 BetSphere Online Casino. All rights reserved.
      </footer>
    </div>
  );
}
