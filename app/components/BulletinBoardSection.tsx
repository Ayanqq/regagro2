'use client';

export default function BulletinBoardSection() {
  return (
    <section id="news" className="relative h-[777px] bg-white">
      <div className="max-w-[1320px] mx-auto px-4 relative z-10 h-full">
        {/* Background Grass Texture */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-100 to-transparent">
          <img 
            src="/images/section/section-4.png" 
            alt="Bulletin board background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full py-20">
          {/* Left Content - Video/Image */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-green-200 to-green-400 rounded-2xl relative overflow-hidden">
              {/* Placeholder for video/image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                    </svg>
                  </div>
                  <p>Professional Video</p>
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
              VIEW ALL NEWS
            </button>
          </div>

          {/* Right Content - Bulletin Board */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Professional bulletin board
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Bulletin Items */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-600">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-800">Seminar 01</h3>
                  <span className="text-sm text-gray-500">12.03.2024</span>
                </div>
                <p className="text-gray-600">London</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-800">News 01</h3>
                  <span className="text-sm text-gray-500">12.03.2024</span>
                </div>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-600">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-800">Seminar 02</h3>
                  <span className="text-sm text-gray-500">12.03.2024</span>
                </div>
                <p className="text-gray-600">Barcelona</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
