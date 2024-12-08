import React from 'react'
import Image from 'next/image'

const Companylogo = () => {
  return (
    <div>
      {/* First Image - Banner */}
      <Image 
        src="/banner/Group 161.png" 
        alt="bannershop" 
        width={1620} 
        height={1000} 
        className="w-full h-auto mt-[50px]" 
      />

      {/* Second Image - Logo */}
      <div className="flex justify-center mt-[50px] mb-[50px]">
        <Image 
          src="/banner/image 1174.png" 
          alt="allogo" 
          width={1000} 
          height={1000} 
          className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] h-auto" 
        />
      </div>
    </div>
  )
}

export default Companylogo
