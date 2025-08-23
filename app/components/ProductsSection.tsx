'use client';

export default function ProductsSection() {
  return (
    <section id="catalog" className="relative h-[777px] bg-gray-50">
      <div className="max-w-[1320px] mx-auto px-4 relative z-10 h-full">
        {/* Background Grass Texture */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-100 to-transparent">
          <img 
            src="/images/section/section-3.png" 
            alt="Products background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full py-20">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Products available in your country
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Country Input */}
            <div className="bg-white rounded-lg p-4 border border-gray-200 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Select your country" 
                  className="flex-1 text-gray-700 placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors">
              FIND PRODUCTS
            </button>
          </div>

          {/* Right Side - Product Timeline */}
          <div className="relative">
            <div className="space-y-8">
              {/* Play Button */}
              <div className="flex justify-center">
                <button className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                </button>
              </div>

              {/* Product Items */}
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Wide range of products</h3>
                  <p className="text-sm text-gray-600">More than 100 types of ear tags</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Easy to use</h3>
                  <p className="text-sm text-gray-600">Applicators for all types of ear tags</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Traceability</h3>
                  <p className="text-sm text-gray-600">RFID microchips</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
