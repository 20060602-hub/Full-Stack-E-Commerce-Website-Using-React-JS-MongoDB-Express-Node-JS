import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center justify-start px-6 sm:px-12"
      style={{ backgroundImage: `url(${assets.hero_img})` }}
    >
      <div className="bg-white bg-opacity-80 p-8 sm:p-10 rounded max-w-xl text-[#414141]">
        {/* Tagline */}
        <div className="flex items-center gap-2 mb-2">
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          <p className="font-medium text-sm md:text-base tracking-wide">
            OUR BESTSELLERS
          </p>
        </div>

        {/* Heading */}
        <h1 className="prata-regular text-4xl sm:py-3 lg:text-6xl leading-tight">
          Latest Arrivals
        </h1>

        {/* Call to Action */}
        <div className="flex items-center gap-2 mt-4">
          <p className="font-semibold text-sm md:text-base tracking-wide">
            SHOP NOW
          </p>
          <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
        </div>
      </div>
    </div>
  )
}

export default Hero

