import React from 'react'
import landingPic from "../assets/Landing.png"
const Landing = () => {
  return (
    <section className='flex flex-row justify-between px-12 py-10'>
      <img src={landingPic} alt="person" className='w-[40%]'/>
      <div className='text-right'>
       <p className='text-[#1E1E1E] opacity-50 text-[20px] font-semibold pt-6 pb-8 '>الرحلات معنا</p>
       <h1 className='text-[#2B49FF] font-black text-[70px] pb-10 '>إكتشف</h1>
       <h2 className='font-semibold text-[42px] pb-10'>  سهولة حجز رحلاتك من أي مكان وفي أي وقت و بأقل التكاليف </h2>
       <p className='font-semibold text-[20px] text-[#1E1E1E] opacity-50 pb-14'>احجز الأن واستمتع بعروض الصيف انت و عائلتك بأقل الاسعار  </p>
       <button className='bg-[#1E1E1E] text-white font-bold text-[18px] rounded-md px-7 py-3 animate-bounce hover:opacity-75'>أحجز الأن</button>
      </div>
    </section>
  )
}

export default Landing
