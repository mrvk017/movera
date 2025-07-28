import React, { useState } from 'react';
import { Linkedin, Facebook, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 py-16 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start mb-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 mb-4">
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center">
                  <div className="text-gray-600 font-bold text-lg">MS</div>
                </div>
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-gray-800 tracking-wider mb-1">MISS SPA</div>
                <div className="text-sm text-gray-500 tracking-wide">MASSAGE CENTER</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Turpis in eu mi bibendum neque egestas neunc sed blandit 
              libero volutpat sedcras ornare arcu dui vivamus arcu
            </p>

            {/* Download App */}
            <div className="mb-8">
              <h3 className="text-xl font-light text-gray-800 tracking-wider mb-6">
                DOWNLOAD APP
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="inline-block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-12 w-auto"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-light text-gray-800 tracking-wider mb-8">
              CONTACT US
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 font-medium mb-1">Address:</p>
                <p className="text-gray-600 text-sm">
                  No 12: Madison Street, Baltimore, USA 4508
                </p>
              </div>
              <div>
                <p className="text-gray-700 font-medium mb-1">Email:</p>
                <p className="text-gray-600 text-sm">info@examples.com</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium mb-1">Phone:</p>
                <p className="text-gray-600 text-sm">+000 123 456789</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-8">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:shadow-md transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:shadow-md transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:shadow-md transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-light text-gray-800 tracking-wider mb-8">
              JOIN OUR NEWSLETTER
            </h3>
            
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="flex-1 px-6 py-4 bg-white rounded-full border border-gray-200 focus:outline-none focus:border-gray-400 text-gray-700"
                  required
                />
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium tracking-wide"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <p className="text-gray-600 text-sm mb-8">
              We Won't Spam. We Hate It More Than You Do.
            </p>

            {/* Accepted Payments */}
            <div>
              <h4 className="text-xl font-light text-gray-800 tracking-wider mb-6">
                ACCEPTED PAYMENTS:
              </h4>
              <div className="flex items-center space-x-6">
                <div className="text-orange-600 font-bold text-lg">Payoneer</div>
                <div className="text-orange-500 font-bold text-lg">amazon pay</div>
                <div className="text-blue-600 font-bold text-lg">Skrill</div>
                <div className="text-blue-700 font-bold text-lg">VISA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              All Right Reserved © 2023 WeDesignTech
            </p>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;