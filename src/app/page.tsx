
import Companylogo from '@/Components/Companylogo'
import FeaturedProducts from '@/Components/Featuredproduct'
import Hero from '@/Components/Hero'
import Latestblog from '@/Components/Latestblog'
import Topcategories from '@/Components/Topcategories'
import React from 'react'

const page = () => {
  return (
    <div>
    <Hero/>
    <FeaturedProducts/>
    <Topcategories/>
    <Companylogo/>
    <Latestblog/>
    </div>
  )
}

export default page

