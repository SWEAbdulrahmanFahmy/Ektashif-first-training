import React from 'react'

import AboutPic from "../assets/about.png"
const AboutUs = () => {
  return (
    <section className='py-16 px-12 flex xl:flex-row md:flex-col-reverse  lg:flex-row flex-col-reverse justify-between bg-[#F4F6FF] gap-8'>
      <img src={AboutPic} alt="about" className='lg:w-[350px] w-auto lg:ml-[70px] ml-[10px]  -mt-2'/>
      <div className='text-right'>
       <div className='flex flex-row-reverse  gap-4'>
       <svg width="77" height="4" viewBox="0 0 77 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M75 2L32 2" stroke="#3E59FE" stroke-width="3" stroke-linecap="round"/>
<path d="M8 2L2 2" stroke="#3E59FE" stroke-width="3" stroke-linecap="round"/>
<path d="M22 2L16 2" stroke="#3E59FE" stroke-width="3" stroke-linecap="round"/>
<path d="M36 2L30 2" stroke="#3E59FE" stroke-width="3" stroke-linecap="round"/>
       </svg>
        <p className='text-[#3E59FE] text-[20px] -mt-4'>نبذة عنا</p>
       </div>
       <h1 className="font-bold text-[28px]">هل لديك الفضول بمعرفتنا؟</h1>
       <p className='font-semibold text-[20px] pt-4 w-[280px] lg:w-[520px] md:w-[700px] md:-ml-8 mr-8 lg:mr-8 xl:mr-8'>
       اكتشف" هو تطبيق سياحي متكامل يهدف إلى تسهيل تجربة السفر للمسافرين عبر توفير معلومات شاملة ومميزات فريدة. يقدم التطبيق قائمة بالأماكن السياحية والعروض في العديد من الوجهات السياحية في جميع أنحاء العالم، مما يسمح للمستخدمين بتخطيط رحلاتهم بسهولة وثقة.
       </p>
      </div>
    </section>
  )
}

export default AboutUs
