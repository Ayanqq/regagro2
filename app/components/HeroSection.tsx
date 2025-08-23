'use client';

export default function HeroSection() {
  return (
    <section className="relative flex items-center pt-[125px]">
      {/* Content */}
      <div className="max-w-[1320px] h-[777px] mx-auto px-4 relative z-10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/section/section-1.png" 
            alt="Hero background" 
            className=" object-cover"
          />
        </div>

        <div className=" items-center relative z-20">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Revolutionize animal identification with this one-stop platform from a leading global manufacturer
            </h1>
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/* Play Button */}
      <div className="absolute bottom-8 right-8">
        <button className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
          <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
        </button>
      </div>
    </section>
  );
}
