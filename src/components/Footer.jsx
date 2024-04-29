import React  from 'react'
import logo from "../assets/logo.png"
import Google from "../assets/Google.png"
import Apple from "../assets/Appstore.png"
const Footer = () => {
  return (
    <footer className='px-12 pt-10 bg-[#F4F6FF] '>
        {/* Footer content */}
        <div className='flex flex-row-reverse justify-between'>
            <div>
            <img src={logo} alt="logo" className='w-14 h-12 ml-[84%] mb-6'/>
            <p className='w-[350px] h-[229px] text-right'>اكتشف" هو تطبيق سياحي متكامل يهدف إلى تسهيل تجربة السفر للمسافرين عبر توفير معلومات شاملة ومميزات فريدة. يقدم التطبيق قائمة بالأماكن السياحية والعروض في العديد من الوجهات السياحية في جميع أنحاء العالم، مما يسمح للمستخدمين بتخطيط رحلاتهم بسهولة وثقة.</p>
            </div>
            <div className='text-right'>
             <h1 className='pb-4 text-[20px] font-semibold'>خريطه الموقع</h1>
             <p className='pb-2 hover:text-[#2B49FF] cursor-pointer'>الرئيسية</p>
             <p className='pb-2 hover:text-[#2B49FF] cursor-pointer'>المطاعم</p>
             <p className='pb-2 hover:text-[#2B49FF] cursor-pointer'>الفنادق </p>
            </div>
            <div className='text-right'>
            <h1 className='pb-4 text-[20px] font-semibold'>للتواصل</h1>
            <p className='pb-2 hover:text-[#2B49FF] cursor-pointer '>مساعدة التعليمات </p>
            <p className='pb-2 hover:text-[#2B49FF] cursor-pointer'>الاحكام</p>
            <p className='pb-2 hover:text-[#2B49FF] cursor-pointer'>الشركات التبعه </p>
           </div>
            <div>
            <h1 className='pb-4 text-[20px] font-semibold'>أستكشف التطبيق</h1>
            <img src={Google} alt="google and apple" className='w-32 ml-4 mb-2'/>
            <img src={Apple} alt="google and apple" className='w-32 ml-4'/>
            {/*social media*/}
            <div className='flex flex-row gap-8 mt-10'>
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.6663 20.0002C36.6663 10.8002 29.1997 3.3335 19.9997 3.3335C10.7997 3.3335 3.33301 10.8002 3.33301 20.0002C3.33301 28.0668 9.06634 34.7835 16.6663 36.3335V25.0002H13.333V20.0002H16.6663V15.8335C16.6663 12.6168 19.283 10.0002 22.4997 10.0002H26.6663V15.0002H23.333C22.4163 15.0002 21.6663 15.7502 21.6663 16.6668V20.0002H26.6663V25.0002H21.6663V36.5835C30.083 35.7502 36.6663 28.6502 36.6663 20.0002Z" fill="#1E1E1E" fill-opacity="0.8"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9997 3.3335H26.9997C32.333 3.3335 36.6663 7.66683 36.6663 13.0002V27.0002C36.6663 29.5639 35.6479 32.0227 33.835 33.8355C32.0222 35.6484 29.5634 36.6668 26.9997 36.6668H12.9997C7.66634 36.6668 3.33301 32.3335 3.33301 27.0002V13.0002C3.33301 10.4364 4.35146 7.97765 6.16431 6.1648C7.97716 4.35195 10.4359 3.3335 12.9997 3.3335ZM12.6663 6.66683C11.075 6.66683 9.54892 7.29897 8.4237 8.42419C7.29848 9.54941 6.66634 11.0755 6.66634 12.6668V27.3335C6.66634 30.6502 9.34967 33.3335 12.6663 33.3335H27.333C28.9243 33.3335 30.4504 32.7014 31.5756 31.5761C32.7009 30.4509 33.333 28.9248 33.333 27.3335V12.6668C33.333 9.35016 30.6497 6.66683 27.333 6.66683H12.6663ZM28.7497 9.16683C29.3022 9.16683 29.8321 9.38632 30.2228 9.77702C30.6135 10.1677 30.833 10.6976 30.833 11.2502C30.833 11.8027 30.6135 12.3326 30.2228 12.7233C29.8321 13.114 29.3022 13.3335 28.7497 13.3335C28.1971 13.3335 27.6672 13.114 27.2765 12.7233C26.8858 12.3326 26.6663 11.8027 26.6663 11.2502C26.6663 10.6976 26.8858 10.1677 27.2765 9.77702C27.6672 9.38632 28.1971 9.16683 28.7497 9.16683ZM19.9997 11.6668C22.2098 11.6668 24.3294 12.5448 25.8922 14.1076C27.455 15.6704 28.333 17.79 28.333 20.0002C28.333 22.2103 27.455 24.3299 25.8922 25.8927C24.3294 27.4555 22.2098 28.3335 19.9997 28.3335C17.7895 28.3335 15.6699 27.4555 14.1071 25.8927C12.5443 24.3299 11.6663 22.2103 11.6663 20.0002C11.6663 17.79 12.5443 15.6704 14.1071 14.1076C15.6699 12.5448 17.7895 11.6668 19.9997 11.6668ZM19.9997 15.0002C18.6736 15.0002 17.4018 15.5269 16.4641 16.4646C15.5265 17.4023 14.9997 18.6741 14.9997 20.0002C14.9997 21.3262 15.5265 22.598 16.4641 23.5357C17.4018 24.4734 18.6736 25.0002 19.9997 25.0002C21.3258 25.0002 22.5975 24.4734 23.5352 23.5357C24.4729 22.598 24.9997 21.3262 24.9997 20.0002C24.9997 18.6741 24.4729 17.4023 23.5352 16.4646C22.5975 15.5269 21.3258 15.0002 19.9997 15.0002Z" fill="#1E1E1E" fill-opacity="0.8"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.992 17.5552L34.467 3.3335H29.3453L20.587 14.1952L12.817 3.3335H1.66699L14.677 21.5168L2.45033 36.6668H7.57366L17.082 24.8835L25.517 36.6668H36.667L22.992 17.5552ZM19.0253 22.4718L16.617 19.1068L7.26699 6.04516H11.117L18.6637 16.5735L21.0687 19.9402L31.0987 33.9552H27.2487L19.0253 22.4718Z" fill="#1E1E1E" fill-opacity="0.8"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.6667 5C32.5507 5 33.3986 5.35119 34.0237 5.97631C34.6488 6.60143 35 7.44928 35 8.33333V31.6667C35 32.5507 34.6488 33.3986 34.0237 34.0237C33.3986 34.6488 32.5507 35 31.6667 35H8.33333C7.44928 35 6.60143 34.6488 5.97631 34.0237C5.35119 33.3986 5 32.5507 5 31.6667V8.33333C5 7.44928 5.35119 6.60143 5.97631 5.97631C6.60143 5.35119 7.44928 5 8.33333 5H31.6667ZM30.8333 30.8333V22C30.8333 20.559 30.2609 19.177 29.2419 18.1581C28.223 17.1391 26.841 16.5667 25.4 16.5667C23.9833 16.5667 22.3333 17.4333 21.5333 18.7333V16.8833H16.8833V30.8333H21.5333V22.6167C21.5333 21.3333 22.5667 20.2833 23.85 20.2833C24.4688 20.2833 25.0623 20.5292 25.4999 20.9668C25.9375 21.4043 26.1833 21.9978 26.1833 22.6167V30.8333H30.8333ZM11.4667 14.2667C12.2093 14.2667 12.9215 13.9717 13.4466 13.4466C13.9717 12.9215 14.2667 12.2093 14.2667 11.4667C14.2667 9.91667 13.0167 8.65 11.4667 8.65C10.7196 8.65 10.0032 8.94675 9.47498 9.47498C8.94675 10.0032 8.65 10.7196 8.65 11.4667C8.65 13.0167 9.91667 14.2667 11.4667 14.2667ZM13.7833 30.8333V16.8833H9.16667V30.8333H13.7833Z" fill="#1E1E1E" fill-opacity="0.8"/>
            </svg>
                        
            </div>
            {/*end social media*/}
            </div>
        </div>
        {/* End Footer content */}
        {/* copyrights */}
            <div className='text-center   border-t-2 py-6'>
            <p className='text-[16px] font-medium'>
            كل الحقوق محفوظه لشركه إكتشف لسنه 2024 &copy;
            </p>
            </div>
             {/*  end copyrights */}
    </footer>
  )
}

export default Footer