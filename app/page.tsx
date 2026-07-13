import Header from "./components/Header";
import MatchCard from "./components/MatchCard";
import { matches } from "@/data/matches";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Header />

      <div className="mx-auto mt-24 max-w-5xl px-6 text-center">
        <h1 className="text-6xl font-bold">⚽ Skorinho</h1>

        <h2 className="mt-3 text-2xl text-sky-400">
          Tahmin Yap, Kazan, Zirveye Çık!
        </h2>

        <p className="mt-5 text-xl text-slate-300">
          Tahminin Ücretsiz ve Ödüllü Hali
          <br />
          Ödüller kazan!
        </p>

        <button className="mt-8 rounded-lg bg-green-500 px-10 py-4 text-lg font-bold transition hover:bg-green-600">
          Ücretsiz Katıl
        </button>

        <div className="mx-auto mt-12 max-w-md rounded-2xl bg-slate-800 p-6 shadow-lg">
          <h2 className="text-xl font-bold">🏆 Bu Haftanın Ödülü</h2>

          <h1 className="mt-3 text-5xl font-bold text-green-400">
            50.000 TL
          </h1>

          <p className="mt-5 text-slate-300">
            ⏳ Son Tahmin Süresi
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            3 Gün 12 Saat
          </h3>
        </div>

        <div className="mx-auto mt-14 max-w-2xl text-left">
          <h2 className="mb-5 text-3xl font-bold">
            ⚽ Bugünkü Maçlar
          </h2>

          {matches.map((match) => (
            <MatchCard
              key={match.id}
              homeTeam={match.homeTeam}
              awayTeam={match.awayTeam}
            />
          ))}
        </div>
      </div>
    </main>
  );
}