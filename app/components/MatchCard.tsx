"use client";

import { useState } from "react";

export default function MatchCard({
  homeTeam,
  awayTeam,
}: {
  homeTeam: string;
  awayTeam: string;
}) {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [message, setMessage] = useState("");
  const [saved, setSaved] = useState(false);

  return (
    <div className="mt-4 rounded-xl bg-slate-800 p-5 shadow-lg">
      <h3 className="text-xl font-bold text-white">
        {homeTeam} ⚽ {awayTeam}
      </h3>

      <p className="mt-3 text-slate-300">Tahminini Gir</p>

      <div className="mt-3 flex items-center justify-center gap-3">
        <input
          type="number"
          min="0"
          max="99"
          value={homeScore}
          onChange={(e) => setHomeScore(Number(e.target.value))}
          className="w-14 rounded-md border border-slate-600 bg-slate-700 p-2 text-center text-lg text-white"
        />

        <span className="text-xl font-bold text-white">-</span>

        <input
          type="number"
          min="0"
          max="99"
          value={awayScore}
          onChange={(e) => setAwayScore(Number(e.target.value))}
          className="w-14 rounded-md border border-slate-600 bg-slate-700 p-2 text-center text-lg text-white"
        />
      </div>

      <button
        onClick={() => {
          if (homeScore === 0 && awayScore === 0) {
            setMessage("Lütfen tahmininizi girin.");
            return;
          }

          setSaved(true);
          setMessage(`Tahmininiz: ${homeScore}-${awayScore} kaydedildi.`);
        }}
        className="mt-5 rounded-lg bg-green-500 px-5 py-2.5 text-white transition hover:bg-green-600"
      >
        {saved ? "✓ Kaydedildi" : "Tahmini Kaydet"}
      </button>

      {message && (
        <p className="mt-4 font-bold text-green-400">
          {message}
        </p>
      )}
    </div>
  );
}