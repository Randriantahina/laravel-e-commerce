const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          À propos de Good Store
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Chez <span className="font-semibold text-black">Good Store</span>,
          nous croyons que la mode de qualité ne devrait pas coûter une fortune.
          Notre boutique en ligne propose une sélection de vêtements tendance,
          confortables et accessibles à tous.
          <br className="hidden sm:block" />
          Chaque pièce est choisie avec soin pour vous offrir un look stylé, à
          petit prix.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="bg-white shadow rounded-lg p-6 w-64">
            <h3 className="text-xl font-semibold mb-2">💸 Petits prix</h3>
            <p className="text-sm text-gray-600">
              Des vêtements pour tous les budgets, sans compromis sur le style.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 w-64">
            <h3 className="text-xl font-semibold mb-2">🚚 Livraison rapide</h3>
            <p className="text-sm text-gray-600">
              Votre commande chez vous en un rien de temps, partout à
              Madagascar.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 w-64">
            <h3 className="text-xl font-semibold mb-2">❤️ Sélection soignée</h3>
            <p className="text-sm text-gray-600">
              On choisit chaque vêtement comme si c'était pour nous.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
