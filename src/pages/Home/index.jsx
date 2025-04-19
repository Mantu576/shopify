import React from 'react'
import HomeSlider from '../../components/HomeSlider'
import HomeCatSlider from '../../components/HomeCatSlider'
import { LiaShippingFastSolid } from "react-icons/lia";
import AddBannerSlider from '../../components/AddBannerSlider'
const Home = () => {
  return (
    <>
     <HomeSlider/>
     <HomeCatSlider/>

      <section className='py-16 bg-white'>
        <div className="container">
          <div className='free-shipping w-full p-4 py-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md '>
            <div className=' col1 flex items-center gap-4'>
              
                <LiaShippingFastSolid className='text-[50px]' />
                <span className='text-[20px] font-[600] uppercase '>Free Shipping</span>
              </div>
              <div className='col2'>
                <p className=' mb-0 font-[500]'> Free Delivery on all orders over $499</p>
                </div>
              <p className='font-bold text-[25px]'>-Only $499*</p>
            </div>
          </div>
       </section>
       <AddBannerSlider items={4}/>
    </>
   
  )
}
export default Home