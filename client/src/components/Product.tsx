import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Robe d'été",
    price: "25€",
    image: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
  },
  {
    id: 2,
    name: "Short casual",
    price: "18€",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
  },
  {
    id: 3,
    name: "Pantalon chic",
    price: "30€",
    image: "https://images.pexels.com/photos/1478476/pexels-photo-1478476.jpeg",
  },
  {
    id: 4,
    name: "Chemise blanche",
    price: "22€",
    image: "https://images.pexels.com/photos/936117/pexels-photo-936117.jpeg",
  },
  {
    id: 5,
    name: "T-shirt noir",
    price: "15€",
    image: "https://images.pexels.com/photos/6311393/pexels-photo-6311393.jpeg",
  },
  {
    id: 6,
    name: "Jupe en jean",
    price: "20€",
    image: "https://images.pexels.com/photos/6311580/pexels-photo-6311580.jpeg",
  },
  {
    id: 7,
    name: "Veste légère",
    price: "35€",
    image: "https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg",
  },
  {
    id: 8,
    name: "Débardeur basique",
    price: "12€",
    image: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg",
  },
];

const Product = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-8">Nos produits</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Link
            to={`/produit/${product.id}`}
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={`${product.image}?auto=compress&cs=tinysrgb&h=${index % 2 === 0 ? 280 : 360}`}
              alt={product.name}
              className="w-full object-cover"
              style={{ height: index % 2 === 0 ? "280px" : "360px" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
