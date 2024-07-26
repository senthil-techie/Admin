import React from 'react'
import d4 from "../assets/images/d4.png"
import d2 from "../assets/images/d2.png"
import d3 from "../assets/images/d3.png"

const Home = () => {
  return (
  <>
  <section className='hero__section pt-[60px] 2xl:h-[800px]'> 
    <div className="container">
      <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
        <div>
          <div className='lg:w-[570px]'>
            <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>Healing is not a race, but a beautiful journey 🍃</h1>
            <p className='text__para'>Back in the day, we realised that just as innovation in medical science is
               elementary to the growth of healthcare, we need to bring innovation in how we take quality healthcare to everyone.
               We realised that it is not merely a transaction of health services between a patient and doctor.
                It is trust that fosters a healthy relationship in the journey of health.
            </p>
          </div>
          <div  className='mt-[30px] lg:mt-[70px] flex flex-col  lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
              <span className='w-[100px] h-2  rounded-full block mt-[-14px]'></span>
              <p className='text__para'>Years of Experience</p>
            </div>
            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
              <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
              <p className='text__para'>Clinic Location</p>
            </div>
            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
              <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
              <p className='text__para'>Patient Satisfaction</p>
            </div>
          </div>
        </div>

        <div className='flex gap-[30px] justify-end'>
          <div>
            <img  className="w-full " src={d4} alt="" />
          </div>
          <div className='mt-[30px]'>
            <img src={d2} alt=""  className='w-full mb-[30px]'/>
            <img src={d3} alt="" className='w-full' />
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Home
