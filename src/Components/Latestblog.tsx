import React from 'react'
import Image from 'next/image'

const Latestblog = () => {
  return (
    <div>
     <h2 className='text-center text-[24px] sm:text-[32px] md:text-[40px] lg:text-[42px] font-bold font-josefin text-[#151875] leading-[49.22px]'>
  Latest Blog
</h2>
      <div className='mt-[100px] flex flex-wrap justify-center gap-10'>
        <div className='w-[370px] rounded-[5px] h-[493px]'>
          <Image src="/latestblog/JIUjvqe2ZHg.png" alt="blog image" height={1000} width={1000} className='rounded-[8px]' />
          <div className='flex gap-10 mt-[30px]'>
            <div className='flex'>
              <Image src="/latestblog/Vector (2).png" alt="arrow" width={1000} height={1000} className='w-[11.33px] h-[11.33px] ml-[14px]' />
              <span className='ml-[10px] w-[55px] h-[14px] mt-[-1px] text-[#151875] font-josefin text-[14px] leading-[16.41px]'>
                SaberAli
              </span>
            </div>
            <div className='flex'>
              <Image src="/latestblog/Vector (3).png" alt="calender" width={1000} height={1000} className='w-[11px] h-[11px] ml-[0.92px]' />
              <span className='ml-[10px] w-[97px] h-[14px] mt-[-4px] text-[14px]'>21 August,2020</span>
            </div>
          </div>
          <div className='mt-[20px] flex flex-col gap-4'>
            <span className='text-[#151875] leading-[21.09px] w-[248px] h-[18px] text-[18px] font-semibold'>
              Top essential Trends in 2021
            </span>
            <span className='text-[#72718F] w-[320px] leading-[30px] h-[60px] font-lato text-[16px] font-normal'>
              More off this less hello samlande lied much over tightly circa horse taped mightly
            </span>
            <span className='text-[#151875] leading-[30px] text-[16px] font-lato font-normal w-[80px] h-[30px] underline'>
              Read More
            </span>
          </div>
        </div>
        
        <div className='w-[370px] h-[493px] rounded-[5px]'>
          <Image src="/latestblog/Frame 4.png" alt="blog image" height={1000} width={1000} className='rounded-[8px]' />
          <div className='flex gap-10 mt-[30px]'>
            <div className='flex'>
              <Image src="/latestblog/Vector (2).png" alt="arrow" width={1000} height={1000} className='w-[11.33px] h-[11.33px] ml-[14px]' />
              <span className='ml-[10px] w-[55px] h-[14px] mt-[-1px] text-[#151875] font-josefin text-[14px] leading-[16.41px]'>
                Surfauxion
              </span>
            </div>
            <div className='flex'>
              <Image src="/latestblog/Vector (3).png" alt="calender" width={1000} height={1000} className='w-[11px] h-[11px] ml-[0.92px]' />
              <span className='ml-[10px] w-[97px] h-[14px] mt-[-4px] text-[14px]'>21 August,2020</span>
            </div>
          </div>
          <div className='mt-[20px] flex flex-col gap-4'>
            <span className='text-[#FB2E86] leading-[21.09px] w-[248px] h-[18px] text-[18px] font-semibold'>
              Top essential Trends in 2021
            </span>
            <span className='text-[#72718F] w-[320px] leading-[30px] h-[60px] font-lato text-[16px] font-normal'>
              More off this less hello samlande lied much over tightly circa horse taped mightly
            </span>
            <span className='text-[#FB2E86] leading-[30px] text-[16px] font-lato font-normal w-[80px] h-[30px] underline'>
              Read More
            </span>
          </div>
        </div>
        
        <div className='w-[370px] rounded-[5px] h-[493px]'>
          <Image src="/latestblog/Frame 3.png" alt="blog image" height={1000} width={1000} className='rounded-[8px]' />
          <div className='flex gap-10 mt-[30px]'>
            <div className='flex'>
              <Image src="/latestblog/Vector (2).png" alt="arrow" width={1000} height={1000} className='w-[11.33px] h-[11.33px] ml-[14px]' />
              <span className='ml-[10px] w-[55px] h-[14px] mt-[-1px] text-[#151875] font-josefin text-[14px] leading-[16.41px]'>
                SaberAli
              </span>
            </div>
            <div className='flex'>
              <Image src="/latestblog/Vector (3).png" alt="calender" width={1000} height={1000} className='w-[11px] h-[11px] ml-[0.92px]' />
              <span className='ml-[10px] w-[97px] h-[14px] mt-[-4px] text-[14px]'>21 August,2020</span>
            </div>
          </div>
          <div className='mt-[20px] flex flex-col gap-4'>
            <span className='text-[#151875] leading-[21.09px] w-[248px] h-[18px] text-[18px] font-semibold'>
              Top essential Trends in 2021
            </span>
            <span className='text-[#72718F] w-[320px] leading-[30px] h-[60px] font-lato text-[16px] font-normal'>
              More off this less hello samlande lied much over tightly circa horse taped mightly
            </span>
            <span className='text-[#151875] leading-[30px] text-[16px] font-lato font-normal w-[80px] h-[30px] underline'>
              Read More
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Latestblog

