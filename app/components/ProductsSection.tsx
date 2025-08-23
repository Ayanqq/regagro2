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

        <div className="relative flex items-center pt-[60px] gap-[160px] z-20">
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
          <div className="mt-[110px] flex flex-col gap-8 relative">
            {/* Vertical Line with Dots */}
          <div className="absolute -left-[15px] -top-[100px] bottom-0 flex flex-col items-center justify-center z-20">
           <Image src="/images/line.png" alt="Line" width={10} height={394} />
          </div>
            {/* Product Feature 1 */}
            <div className="flex flex-col items-start">
              <Image src="/images/products/products-1.png" alt="Products" width={60} height={60} />
              <h3 className="font-semibold text-gray-800 mb-1 mt-2.5">Wide range of products</h3>
              <p className="text-sm text-gray-600">Our catalog features all the necessary solutions <br /> for the accounting and identification of animals, <br /> suitable for farms of any scale.</p>
            </div>

            {/* Product Feature 2 */}
            <div className="flex flex-col items-start">
            <Image src="/images/products/products-2.png" alt="Products" width={60} height={60} />
              <h3 className="font-semibold text-gray-800 mb-1 mt-2.5">Fast delivery</h3>
              <p className="text-sm text-gray-600">We understand that agility is vital in farming, <br /> so we ensure same-day handling for our <br /> equipment and supplies.</p>
            </div>

            {/* Product Feature 3 */}
            <div className="flex flex-col items-start">
            <Image src="/images/products/products-3.png" alt="Products" width={80} height={80} />
              <h3 className="font-semibold text-gray-800 mb-1 mt-2.5">User-friendly navigation</h3>
              <p className="text-sm text-gray-600">he catalog is organized by product categories <br /> and types, making it easy to find and order <br /> goods.</p>
            </div>
          </div>

          {/* Play Button */}
          <div className="absolute top-[60px] right-[110px] z-20 flex gap-4 items-center">
            <div className="text-[#4F584E] text-[12px] font-medium leading-[120%]">
              Explore the company's <br /> expertise by watching <br /> the short video
            </div>
            <button className="cursor-pointer">
              <Image src="/images/play-black.png" alt="Play" width={85} height={85} />
            </button>
          </div>

          
        </div>
      </div>
    </section>
  );
}
