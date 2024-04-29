import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t1 from "../assets/t1.png"
import t2 from "../assets/t2.png"
import t3 from "../assets/t3.png"


const Trips= () => {
  const trips=[
    {
        id:1,
        Imge: t1
        ,
        price:"1,200",
        period:"رحلة 10 أيام",
        title:"الأهرامات",
        city:"الجيزة"
    },{
      id:2,
      Imge: t2
      ,
      price:"1,500",
      period:"رحلة 5 أيام",
      title:"معبد الكرنك",
      city:"الأقصر"
    },{
      id:3,
      Imge: t3
      ,
      price:"800",
      period:"رحلة 3 أيام",
      title:"مسجد محمد علي",
      city:"الأسكندرية"
    },{
      id:1,
      Imge: t1
      ,
      price:"1,200",
      period:"رحلة 10 أيام",
      title:"الأهرامات",
      city:"الجيزة"
  },
]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
    الاماكن السياحية المتوفرة في مصر
    <svg className='mt-8 ml-[28%]' width="554" height="6" viewBox="0 0 554 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M551 3L132 3" stroke="#2B49FF" stroke-width="5" stroke-linecap="round"/>
    <line x1="30.3233" y1="2.99316" x2="2.49976" y2="2.99316" stroke="#2B49FF" stroke-width="5" stroke-linecap="round"/>
    <line x1="73.1468" y1="2.99316" x2="45.3233" y2="2.99316" stroke="#2B49FF" stroke-width="5" stroke-linecap="round"/>
    <line x1="115.97" y1="2.99316" x2="88.1468" y2="2.99316" stroke="#2B49FF" stroke-width="5" stroke-linecap="round"/>
    </svg>
    

    </h1>
      <Slider {...settings}>

    {trips.map((item) => ( 
            <div key={item.id} className="px-4  text-center pb-10">
      <img src={item.Imge} alt="ser1"  className='pb-16  '/>
      <div className='flex flex-row-reverse justify-between'>
      <h2 className='font-bold text-[20px] pb-2'>{item.title} , <span className='opacity-50 font-normal'>{item.city}</span></h2>
      <p>{item.price} LE</p>
      </div>
      <div className='flex flex-row justify-end pt-4'>
      
      <p>{item.period}</p> 
       <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.9213 3.15985C20.3893 1.86527 19.1348 0.610766 17.8402 1.07985L2.01809 6.80202C0.719172 7.27218 0.562088 9.04452 1.757 9.73677L6.80751 12.6607L11.3174 8.15077C11.5217 7.95343 11.7954 7.84423 12.0794 7.8467C12.3635 7.84917 12.6352 7.9631 12.8361 8.16396C13.0369 8.36482 13.1509 8.63654 13.1533 8.92058C13.1558 9.20463 13.0466 9.47828 12.8493 9.6826L8.33934 14.1925L11.2643 19.243C11.9555 20.4379 13.7278 20.2798 14.198 18.9819L19.9213 3.15985Z" fill="black"/>
      </svg>    
      </div>
    </div>
    ))}
    
      </Slider>
    </div>    
    
    
    </section>

  )
}

export default Trips
