export default function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Vivarium. Todos os dereitos reservados.</p>
        <p className="text-xs mt-2">Feito con 🐢 por Diana</p>
      </div>
    </footer>
  );
}
