export default function About() {
  return (
    <section id="about" className="py-20 bg-cream-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
              About Us
            </h2>
            <p className="text-lg text-coffee-medium leading-relaxed mb-4">
              Welcome to The Daily Grind, where passion meets perfection in every cup. Since 2010,
              we've been dedicated to sourcing the finest organic coffee beans from sustainable farms
              around the world, roasting them in-house to bring out their unique flavors and aromas.
            </p>
            <p className="text-lg text-coffee-medium leading-relaxed">
              Our artisan bakers start before dawn each day, crafting fresh pastries, croissants, and
              breads using traditional recipes and premium ingredients. We believe in creating a warm,
              welcoming space where our community can gather, connect, and enjoy exceptional coffee
              and baked goods made with love.
            </p>
          </div>

          <div className="relative h-96 md:h-full">
            <img
              src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Coffee beans and latte"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
