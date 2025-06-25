export default function Header() {
  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">🌿 Vivarium</h1>
        <nav className="space-x-4 hidden sm:block">
          <a href="#" className="bg-yellow-600 px-4 py-2 rounded text-black hover:bg-white">Inicio</a>
          <a href="#" className="bg-yellow-600 px-4 py-2 rounded text-black hover:bg-white">Datos curiosos</a>
          <a href="#" className="bg-yellow-600 px-4 py-2 rounded text-black hover:bg-white">Reinos</a>
        </nav>
        <button className="sm:hidden p-2">☰</button>
      </div>
    </header>
  );
}
