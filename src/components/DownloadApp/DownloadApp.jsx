import React, { useEffect, useState } from 'react';
import storeImage from "../../assets/BackgroundStore.png";
import Google from "../../assets/Google.png";
import Apple from "../../assets/Appstore.png";
import './downloadapp.css';
const DownloadApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY + window.innerHeight;
      const element = document.getElementById('downloadAppSection');
      if (element && top > element.offsetTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="downloadAppSection"
      style={{
        backgroundImage: `url(${storeImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 90%',
        backgroundColor:'#F4F6FF',
      }}
      className={`py-[8%] ${isVisible ? 'animate-jump' : ''}`}
    >
      <div className='text-center '>
        <h1 className='text-[30px] font-semibold pb-8'>حمل الان التطبيق واستمتع بتكلفة رحلات ارخص واوفر لك ولعائلتك </h1>
        <div className='flex flex-row justify-center gap-8 '>
          <img src={Google} alt="google" className='w-32 '/>
          <img src={Apple} alt="apple" className='w-32 h-10 mt-2 '/>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
