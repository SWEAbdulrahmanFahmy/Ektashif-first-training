import React from 'react'
import Places from "../assets/places.png"
const Exploring = () => {
  return (
    <section className='px-12 py-14 flex xl:flex-row lg:flex-row md:flex-col-reverse flex-col-reverse justify-between'>
      <img src={Places} alt="places" className='lg:w-[40%] w-auto'/>
      <div className='text-right py-4'>
       <h1 className='text-[#2B49FF] font-bold text-[29px] pb-4'>أستكشاف متعدد الوجهات</h1>
       <p className='lg:w-[600px] w-auto font-medium text-[24px] opacity-80'>يمكن للمستخدمين تحديد الوجهة التي يرغبون في زيارتها واستعراض قائمة شاملة بالأماكن السياحية والمعالم السياحية في تلك الوجهة. يمكن للمستخدمين تحديد الوجهة التي يرغبون في زيارتها واستعراض قائمة شاملة بالأماكن السياحية والمعالم السياحية في تلك الوجهة.يمكن للمستخدمين تحديد الوجهة التي يرغبون في زيارتها واستعراض قائمة شاملة بالأماكن السياحية والمعالم السياحية في تلك الوجهة.يمكن للمستخدمين تحديد الوجهة التي يرغبون في زيارتها.</p>
      </div>
    </section>
  )
}

export default Exploring
