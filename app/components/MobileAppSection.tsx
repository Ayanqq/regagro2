'use client';

export default function MobileAppSection() {
  return (
    <section id="breed" className="relative h-[777px] bg-gray-50">
      <div className="max-w-[1320px] mx-auto px-4 relative z-10 h-full">
        {/* Background Grass Texture */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-100 to-transparent">
          <img 
            src="/images/section/section-5.png" 
            alt="Mobile app background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full py-20">
          {/* Left Content - App Preview */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-green-200 to-green-400 rounded-2xl relative overflow-hidden">
              {/* Placeholder for app preview */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                    </svg>
                  </div>
                  <p>Mobile App Preview</p>
                </div>
              </div>
            </div>

            {/* Play Button */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
              </button>
            </div>

            <button className="mt-6 bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors w-full">
              DOWNLOAD APP NOW
            </button>
          </div>

          {/* Right Content - App Info */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Mobile app for pets and livestock
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* QR Code and App Stores */}
            <div className="space-y-6">
              {/* QR Code */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 inline-block">
                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-20 h-20 bg-gray-400 rounded-lg mx-auto mb-2"></div>
                    <p className="text-xs">QR Code</p>
                  </div>
                </div>
              </div>

              {/* App Store Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-3 hover:bg-gray-800 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>App Store</span>
                </button>

                <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-3 hover:bg-green-700 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <span>Google Play</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
