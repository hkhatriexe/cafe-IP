import { MapPin, Clock } from 'lucide-react';

const openingHours = [
  { day: 'Monday - Friday', hours: '7:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 7:00 PM' },
  { day: 'Sunday', hours: '8:00 AM - 5:00 PM' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-cream-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark text-center mb-12">
          Find Us
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-8 h-8 text-coffee-medium flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-coffee-dark mb-2">Location</h3>
                <p className="text-lg text-coffee-medium leading-relaxed">
                  123 Coffee Street<br />
                  Downtown<br />
                  10001
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-coffee-medium flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-coffee-dark mb-4">Opening Hours</h3>
                <div className="space-y-3">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between gap-4">
                      <span className="text-coffee-medium font-medium">{schedule.day}</span>
                      <span className="text-coffee-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
