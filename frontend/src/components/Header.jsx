export default function Header() {
  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">🌿 Vivarium</h1>
        <nav className="space-x-4 hidden sm:block">
          <a href="#" className="hover:underline">Inicio</a>
          <a href="#" className="hover:underline">Especies</a>
          <a href="#" className="hover:underline">Sobre nós</a>
        </nav>
        <button className="sm:hidden p-2">☰</button>
      </div>
    </header>
  );
}
