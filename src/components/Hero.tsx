export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
      }}
    >
      <div className="absolute inset-0 bg-coffee-dark/60"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-cream mb-6 leading-tight">
          The Daily Grind
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-cream-light font-light tracking-wide">
          Artisan Coffee & Freshly Baked Goods
        </p>
      </div>
    </section>
  );
}
