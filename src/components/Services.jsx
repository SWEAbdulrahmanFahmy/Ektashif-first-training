import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import serv1 from "../assets/serv1.png"
import serv2 from "../assets/serv2.png"
import serv3 from "../assets/serv3.png"


const Services= () => {
  const servs=[
    {
        id:1,
        Imge: serv1
        ,
        title:"ميزة التوجيه الصوتي",
        description:"يتيح التطبيق التوجيه الصوتي للمستخدمين أثناء السفر  وجعل الرحله أكثر متعة وسهولة وفرادة."  
    },{
        id:2,
        Imge:serv2
        ,
        title:"حجوزات مباشرة",
        description:"يمكن للمستخدمين التواصل مع مرشدين سياحيين افتراضيين للحصول على استشارات ونصائح مباشرة."
    },{
        id:3,
        Imge:serv3
            
        ,
        title:"تنبيهات الأمان والسفر",
        description:"يقدم التطبيق تنبيهات فورية حول أي مشاكل أمنية أو تغييرات في الجدول الزمني للرحلات."
    },{
      id:4,
      Imge: serv1
      ,
      title:"ميزة التوجيه الصوتي",
      description:"يتيح التطبيق التوجيه الصوتي للمستخدمين أثناء السفر  وجعل الرحله أكثر متعة وسهولة وفرادة."  
  },
]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
          responsive: [
              {
                  breakpoint: 640, 
                  settings: {
                      slidesToShow: 1,
                  },
              },
              {
                  breakpoint: 768, 
                  settings: {
                      slidesToShow: 2,
                  },
              },
              {
                  breakpoint:1024, 
                  settings: {
                      slidesToShow: 3,
                  },
              }
          ],
    
      
        prevArrow: 
        <button  >
        <svg className='shadow-md rounded-full ' width="32" height="32" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_3_147)">
        <circle cx="40" cy="40" r="34" transform="rotate(-180 40 40)" fill="white"/>
        </g>
        <path d="M44.3 27L32 39.6L44.3 52.2" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
        <filter id="filter0_d_3_147" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3_147"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="4"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_147"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_147" result="shape"/>
        </filter>
        </defs>
        </svg>
        </button>,
        nextArrow:
         <button >
         <svg className='shadow-md rounded-full ' width="32" height="32" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g filter="url(#filter0_d_0_1)">
         <circle cx="40" cy="40" r="34" transform="rotate(-180 40 40)" fill="white"/>
         </g>
         <path d="M36.3504 54.2703L48.6504 41.4922L36.3504 28.7141" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
         <defs>
         <filter id="filter0_d_0_1" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
         <feFlood flood-opacity="0" result="BackgroundImageFix"/>
         <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
         <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_0_1"/>
         <feOffset/>
         <feGaussianBlur stdDeviation="4"/>
         <feComposite in2="hardAlpha" operator="out"/>
         <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
         <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
         <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
         </filter>
         </defs>
         </svg>
         
         </button>
         
      };
  return (
    <section className='px-20 py-14'>
    <div >
    <h1 className='text-center text-[30px] font-bold pb-32'>
    خدمات إكتشف 
       <svg className='mt-8 lg:ml-[41%] xl:ml-[41%] md:ml-[34%] 2xl:ml-[45%] ml-[18%] h-[7] xl:w-[230px] md:w-[230px] lg:w-[230px] w-[200px]'  viewBox="0 0 252 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M249 3.15247L68.1025 3.15245" stroke="#3E59FE" stroke-width="5" stroke-linecap="round"/>
<line x1="12.3977" y1="2.5" x2="2.50025" y2="2.5" stroke="#3E59FE" stroke-width="5" stroke-linecap="round"/>
<line x1="33.6797" y1="2.5" x2="23.7822" y2="2.5" stroke="#3E59FE" stroke-width="5" stroke-linecap="round"/>
<line x1="54.9618" y1="2.5" x2="45.0643" y2="2.5" stroke="#3E59FE" stroke-width="5" stroke-linecap="round"/>
</svg>

    </h1>
      <Slider {...settings}>

    {servs.map((item) => ( 
            <div key={item.id} className="px-4  text-center pb-10">
      <img src={item.Imge} alt="ser1"  className='py-10 w-[100px] lg:mx-32 xl:mx-32 mx-16 md:mx-20 2xl:mx-[45%]'/>
      <h2 className='font-bold text-[20px] pb-2'>{item.title}</h2>
      <p className='font-normal text-[16px] text-[#1E1E1E] opacity-50 '>
      {item.description}
      </p>
     
    </div>
    ))}
    
      </Slider>
    </div>    
    
    
    </section>

  )
}

export default Services
