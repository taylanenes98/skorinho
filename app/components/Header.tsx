export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-5">
      <h2 className="text-3xl font-bold text-green-500">
        ⚽ Skorinho
      </h2>

      <nav className="flex gap-8 text-lg font-bold">
        <a href="/" className="text-white hover:text-green-400 transition">
          Ana Sayfa
        </a>

        <a
          href="/kayit"
          className="text-white hover:text-green-400 transition"
        >
          Kayıt Ol
        </a>

        <a href="#" className="text-white hover:text-green-400 transition">
          Giriş Yap
        </a>
      </nav>
    </header>
  );
}