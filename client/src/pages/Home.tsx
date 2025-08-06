import About from "@/components/About";
import Footer from "@/components/Footer";
import Product from "@/components/Product";

const Home: React.FC = () => {
  return (
    <>
      <header className="w-full max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">La qualité à petit prix</h1>
        <p className="text-lg text-gray-700 mb-8">
          Good Store — Découvrez nos produits uniques
        </p>
        <img
          src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1350&q=80"
          alt="Produit"
          className="w-full rounded-lg shadow-md"
        />
      </header>
      <main>
        <Product />
        <About />
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
