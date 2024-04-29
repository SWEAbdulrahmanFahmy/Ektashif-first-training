import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import c1 from "../assets/customer1.png"
import c2 from "../assets/customer2.png"
import c3 from "../assets/customer3.png"


const CustomerReview= () => {
  const trips=[
    {
        id:1,
        Imge: c1
    },{
      id:2,
      Imge: c2
    },{
      id:3,
      Imge: c3
    },{
      id:4,
      Imge: c1
  },
]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
       
      };
  return (
    <section className='px-20 py-14'>
    <div >
    <h1 className='text-center text-[30px] font-bold pb-32'>
    ما يقوله المستخدمين 
    <svg className='mt-8 ml-[35%]' width="352" height="7" viewBox="0 0 352 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M349 4L95.4528 3.99997" stroke="#3E59FE" stroke-width="5" stroke-linecap="round"/>
    <line x1="18.3807" y1="2.5" x2="2.50038" y2="2.5" stroke="#3E59FE" stroke-width="5" stroke-linecap="round"/>
    <line x1="48.2097" y1="2.5" x2="32.3294" y2="2.5" stroke="#3E59FE" stroke-width="5" stroke-linecap="round"/>
    <line x1="78.0388" y1="2.5" x2="62.1584" y2="2.5" stroke="#3E59FE" stroke-width="5" stroke-linecap="round"/>
    </svg>
    
    

    </h1>
      <Slider {...settings}>

    {trips.map((item) => ( 
            <div key={item.id} className="px-4   text-center pb-10">
      <img src={item.Imge} alt="ser1"  className='pb-16  '/>
    </div>
    ))}
    
      </Slider>
    </div>    
    
    
    </section>

  )
}

export default CustomerReview
