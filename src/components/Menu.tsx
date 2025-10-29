interface MenuItem {
  title: string;
  description: string;
  price: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    title: 'Classic Cappuccino',
    description: 'Rich espresso topped with velvety steamed milk and foam.',
    price: '$4.50',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Almond Croissant',
    description: 'Buttery, flaky pastry filled with sweet almond cream.',
    price: '$3.75',
    image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Cold Brew',
    description: 'Smooth, bold coffee steeped for 24 hours and served over ice.',
    price: '$5.00',
    image: 'https://images.pexels.com/photos/7488707/pexels-photo-7488707.jpeg',
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-beige-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark text-center mb-4">
          Our Favorites
        </h2>
        <p className="text-center text-coffee-medium mb-12 text-lg">
          Handpicked selections from our menu
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-coffee-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-coffee-medium mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="text-2xl font-bold text-coffee-medium">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
