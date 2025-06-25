import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold text-blue-600">Contido</h1>
      </main>

      <Footer />
    </div>
  );
}
