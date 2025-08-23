'use client';

import Image from 'next/image';

export default function ProductsSection() {
  return (
    <section id="catalog" className="relative bg-white pt-[125px]">
      <div className="max-w-[1320px] mx-auto px-4 h-[777px] relative z-10">
        {/* Background Grass Texture */}
        <div className="absolute top-0 left-0 right-0">
          <img 
            src="/images/section/section-3.png" 
            alt="Products background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative flex items-center h-full pt-[60px] z-20">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Products available in your country
            </h2>
            <p className="text-[17px] text-[#4F584E] mb-[18px] leading-[120%]">
            Streamline animal registration with an exhaustive set of tagging tools collected in the one-stop shop. <br /> The RegAgro equipment provides free access to advanced, continuously updated IT <br /> products, helping animal owners cover the entire identification process — from individual <br /> marking to automated data collection and processing.
            </p>

            <Image src="/images/book.png" alt="Products" width={734} height={324} />

            <button className="bg-[#FFDA18] mt-[21px] cursor-pointer text-[#355332] px-[55px] py-[24px] rounded-full text-lg leading-[120%] font-semibold transition-colors uppercase">
              View the catalog
            </button>
          </div>

          {/* Right Side - Product Features */}
          <div className="mt-16 flex flex-col gap-8">
            {/* Product Feature 1 */}
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-[#4F584E] rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Wide range of products</h3>
              <p className="text-sm text-gray-600">More than 100 types of ear tags</p>
            </div>

            {/* Product Feature 2 */}
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-[#4F584E] rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Easy to use</h3>
              <p className="text-sm text-gray-600">Applicators for all types of ear tags</p>
            </div>

            {/* Product Feature 3 */}
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-[#4F584E] rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Traceability</h3>
              <p className="text-sm text-gray-600">RFID microchips</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
