'use client';

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white">
      <div className="max-w-[1320px] mx-auto px-4 h-[777px] relative z-10 h-full">
        {/* Background Grass Texture */}
        <div className="absolute top-0 left-0 right-0">
          <img 
            src="/images/section/section-2.png" 
            alt="About background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full py-20">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              About RegAgro products and expertise
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Global manufacturer</h3>
                <p className="text-sm text-gray-600">More than 20 years of experience</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Global presence</h3>
                <p className="text-sm text-gray-600">More than 100 countries</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Quality products</h3>
                <p className="text-sm text-gray-600">ISO 9001 certified</p>
              </div>
            </div>

            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors">
              VIEW OUR CATALOG
            </button>
          </div>

          {/* Right Side - Grass with Animals */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-green-200 to-green-400 rounded-2xl relative overflow-hidden">
              {/* Animal Silhouettes */}
              <div className="absolute bottom-8 left-8 w-16 h-12 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-12 right-12 w-20 h-14 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-6 right-6 w-12 h-10 bg-white/20 rounded-full"></div>
            </div>

            {/* Play Button */}
            <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
              <button className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
