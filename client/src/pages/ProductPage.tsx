import { useParams } from "react-router-dom";

import { products } from "../data/products"; // extrait ou copie ton tableau ici

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id || "", 10));

  if (!product) return <div>Produit introuvable.</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[500px] object-cover rounded-xl"
        />

        {/* Infos & Formulaire */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-6">{product.price}</p>

          <form className="space-y-4">
            {/* Taille */}
            <div>
              <label className="block mb-1 font-medium">Taille</label>
              <select className="w-full border px-4 py-2 rounded">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

            {/* Couleur */}
            <div>
              <label className="block mb-1 font-medium">Couleur</label>
              <input
                type="text"
                placeholder="Rouge, Noir..."
                className="w-full border px-4 py-2 rounded"
              />
            </div>

            {/* Quantité */}
            <div>
              <label className="block mb-1 font-medium">Quantité</label>
              <input
                type="number"
                min={1}
                defaultValue={1}
                className="w-full border px-4 py-2 rounded"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            >
              Acheter
            </button>
          </form>
        </div>
      </div>

      {/* Produits similaires */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Produits similaires</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {products
            .filter(
              (p) =>
                p.id !== product.id &&
                p.name.includes(product.name.split(" ")[0]),
            )
            .map((p) => (
              <div
                key={p.id}
                className="bg-white shadow rounded overflow-hidden"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-md font-semibold">{p.name}</h3>
                  <p className="text-sm text-gray-600">{p.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
