import React from 'react'
import pic1 from"../assets/pic1.png"
import pic2 from"../assets/pic2.png"
import pic3 from"../assets/pic3.png"
import pic4 from"../assets/pic4.png"


const Advantages = () => {
    
    const pros=[
        {
            id:1,
            Imge:pic1
            ,
            title:"تفاصيل مفصلة",
            description:"يقدم التطبيق معلومات شاملة عن كل مكان سياحي، بما في ذلك التاريخ، والأنشطة المتاحة، والأوقات، والتكاليف."  
        },{
            id:2,
            Imge:pic2
            ,
            title:"حجوزات مباشرة",
            description:"يمكن للمستخدمين حجز الفنادق والتذاكر والجولات مباشرة من التطبيق"
        },{
            id:3,
            Imge:   pic3
                
            ,
            title:"العروض والخصومات",
            description:"يتيح التطبيق للمستخدمين استعراض العروض والخصومات المقدمة من شركات السياحة والفنادق والمطاعم في تلك الوجهة."
        },{
            id:4,
            Imge:  pic4
              
            ,
            title:"توصيات شخصية",
            description:"يقدم التطبيق توصيات شخصية للأماكن السياحية استنادًا إلى اهتمامات المستخدم وتاريخ تصفحه السابق."
            
        },
    ]

  return (
    <section className='px-12 py-10'>
      <h1 className='text-center text-[30px] font-bold pb-32'>
      مميزات إكتشف
      <svg className='mt-8 ml-[41%]' width="230" height="6" viewBox="0 0 252 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M249 3.15247L68.1025 3.15245" stroke="#3E59FE" stroke-width="5" stroke-linecap="round"/>
<line x1="12.3977" y1="2.5" x2="2.50025" y2="2.5" stroke="#3E59FE" stroke-width="5" stroke-linecap="round"/>
<line x1="33.6797" y1="2.5" x2="23.7822" y2="2.5" stroke="#3E59FE" stroke-width="5" stroke-linecap="round"/>
<line x1="54.9618" y1="2.5" x2="45.0643" y2="2.5" stroke="#3E59FE" stroke-width="5" stroke-linecap="round"/>
</svg>

      </h1>
      <div className='flex flex-row-reverse justify-between text-center'>
       {pros.map((item) => (
        <div key={item.id}>
         <img src={item.Imge} alt={item.title}  className='pb-4 animate-pulse'/>
          <h2 className='font-bold text-[20px] pb-2'>{item.title}</h2>
          <p className='w-[280px] font-normal text-[16px] text-[#1E1E1E] opacity-50 text-right'>{item.description}</p>
        </div>
      ))}
      </div>
   
    </section>
  )
}

export default Advantages
