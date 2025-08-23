'use client';

export default function ContactSection() {
  return (
    <section id="contacts" className="relative h-[777px] bg-gray-50">
      <div className="max-w-[1320px] mx-auto px-4 relative z-10 h-full">
        {/* Background Grass Texture */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-100 to-transparent">
          <img 
            src="/images/section/section-7.png" 
            alt="Contact background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="flex flex-col justify-center h-full py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Have any questions? Write to us — we'll help you out
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree to the processing of personal data
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Navigation Links */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Navigation</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#catalog" className="text-gray-600 hover:text-green-600 transition-colors">
                        Catalog
                      </a>
                    </li>
                    <li>
                      <a href="#news" className="text-gray-600 hover:text-green-600 transition-colors">
                        News
                      </a>
                    </li>
                    <li>
                      <a href="#contacts" className="text-gray-600 hover:text-green-600 transition-colors">
                        Contacts
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact Details */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Contacts</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-600">
                      <span className="font-medium">Email:</span> info@regagro.com
                    </li>
                    <li className="text-gray-600">
                      <span className="font-medium">Phone:</span> +1 (555) 123-4567
                    </li>
                    <li className="text-gray-600">
                      <span className="font-medium">Address:</span> 123 Agriculture St, Farm City, FC 12345
                    </li>
                  </ul>
                </div>
              </div>

              {/* Copyright */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  Copyright © 2024 RegAgro. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
