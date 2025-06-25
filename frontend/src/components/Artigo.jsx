export default function Artigo({ titulo, texto }) {
  return (
    <article className="max-w-3xl mx-auto p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-4">{titulo}</h2>
      <p className="text-gray-800 leading-relaxed">{texto}</p>
    </article>
  );
}
