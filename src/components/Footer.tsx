import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-coffee-dark py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold text-cream mb-6">The Daily Grind</h3>

          <div className="flex gap-6 mb-8">
            <a
              href="#"
              className="text-cream hover:text-beige-warm transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-7 h-7" />
            </a>
            <a
              href="#"
              className="text-cream hover:text-beige-warm transition-all duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-7 h-7" />
            </a>
            <a
              href="#"
              className="text-cream hover:text-beige-warm transition-all duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-7 h-7" />
            </a>
          </div>

          <p className="text-cream-dark text-center">
            &copy; {new Date().getFullYear()} The Daily Grind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
