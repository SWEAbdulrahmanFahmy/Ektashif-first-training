import React, { useEffect, useState } from 'react';
import logo from "../../assets/logo.png";
import './Header.css'; // Import CSS file for animation

const Header = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after a delay to simulate loading
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={`bg-white py-2 px-12 sticky top-0 z-50 shadow-md flex flex-row-reverse justify-between h-[62px] ${loaded ? 'animate-header' : ''}`}>
      {/*logo */}
      <div>
        <img src={logo} alt="logo" className='w-14 h-12'/>
      </div>
      {/* End logo */}
      <div className='flex flex-row-reverse gap-14'>
        {/*nav */}
        <nav className="flex gap-10 flex-row-reverse pt-3">
          <a className='font-extrabold text-[#2B49FF] text-[16px]' href='#'>
            الرئيسية
            <svg className='mt-3' width="76" height="4" viewBox="0 0 76 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M74 2L26 2" stroke="#2B49FF" strokeWidth="3" strokeLinecap="round"/>
              <path d="M5 2L2 2" stroke="#2B49FF" strokeWidth="3" strokeLinecap="round"/>
              <path d="M13 2L10 2" stroke="#2B49FF" strokeWidth="3" strokeLinecap="round"/>
              <path d="M21 2L18 2" stroke="#2B49FF" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </a>
          <a className='font-semibold text-[#1E1E1E] text-[16px] hover:text-[#2B49FF] ' href='#'>الحجوزات</a>
          <a className='font-semibold text-[#1E1E1E] text-[16px]  hover:text-[#2B49FF]' href='#'>الرحلات الجوية</a>
          <a className='font-semibold text-[#1E1E1E] text-[16px]  hover:text-[#2B49FF]' href='#'>الفنادق </a>
          <a className='font-semibold text-[#1E1E1E] text-[16px]  hover:text-[#2B49FF]' href='#'>المطاعم</a>
        </nav>
        {/*end nav */}
        {/*language */}
        <div className="flex gap-2 flex-row pt-3 hover:text-[#2B49FF]">
          <svg width="24" height="24" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.375 22.2375C22.05 21.2375 21.1125 20.5 20 20.5H18.75V16.75C18.75 16.4185 18.6183 16.1005 18.3839 15.8661C18.1495 15.6317 17.8315 15.5 17.5 15.5H10V13H12.5C12.8315 13 13.1495 12.8683 13.3839 12.6339C13.6183 12.3995 13.75 12.0815 13.75 11.75V9.25H16.25C16.913 9.25 17.5489 8.98661 18.0178 8.51777C18.4866 8.04893 18.75 7.41304 18.75 6.75V6.2375C20.2456 6.84046 21.5728 7.79684 22.618 9.02479C23.6633 10.2527 24.3954 11.7157 24.7517 13.2884C25.108 14.8611 25.0779 16.4967 24.664 18.0553C24.2501 19.6138 23.4647 21.0488 22.375 22.2375ZM13.75 25.4125C8.8125 24.8 5 20.6 5 15.5C5 14.725 5.1 13.975 5.2625 13.2625L11.25 19.25V20.5C11.25 21.163 11.5134 21.7989 11.9822 22.2678C12.4511 22.7366 13.087 23 13.75 23M15 3C13.3585 3 11.733 3.32332 10.2165 3.95151C8.69989 4.57969 7.3219 5.50043 6.16117 6.66117C3.81696 9.00537 2.5 12.1848 2.5 15.5C2.5 18.8152 3.81696 21.9946 6.16117 24.3388C7.3219 25.4996 8.69989 26.4203 10.2165 27.0485C11.733 27.6767 13.3585 28 15 28C18.3152 28 21.4946 26.683 23.8388 24.3388C26.183 21.9946 27.5 18.8152 27.5 15.5C27.5 13.8585 27.1767 12.233 26.5485 10.7165C25.9203 9.19989 24.9996 7.8219 23.8388 6.66117C22.6781 5.50043 21.3001 4.57969 19.7835 3.95151C18.267 3.32332 16.6415 3 15 3Z" fill="#1E1E1E"/>
          </svg>
          <p className='font-semibold'>Ar</p>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10.5L12 15.5L17 10.5" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/*end language */}
      </div>
    </header>
  );
}

export default Header;
