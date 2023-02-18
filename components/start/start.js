import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image'

export default function Start({scrollPosition}){
  const [b,setB] = useState(0)
  useEffect(() =>{
    const handleScroll = () =>{
      const divCont = document.querySelector('.divCont')
      const divTeko = document.querySelector('.divTeko')
      const divImg = document.querySelectorAll('.divImg')
      const divContOffSet = divCont.offsetTop - 150
      let timeout = 700     
      setB(scrollPosition)
      if(b> divContOffSet){
          console.log('ok')
        
          setTimeout(() =>{
              divTeko.classList.add('show')

          },timeout)
                        
                        
      divImg.forEach(element => {
        setTimeout(() =>{
            element.classList.add('swipe')

        },timeout)
        timeout += 350;                
        
        
    });
    }
  }
  

   handleScroll()

   window.addEventListener('scroll',handleScroll)

  return  () => {
      window.removeEventListener('scroll', handleScroll)
  }
  })
    return(
        <>
        <div id='start' className={`bg-gradient-to-b from-[#395144] via-[#4E6C50] to-[#395144] relative md:bottom-[-100px] hp:bottom-[-150px] xl:bottom-[300px] h-[100%]  mt-[50px] divCont`}>
        <div className='xl:relative  '>
            <h2 className='text-center text-[#FAD6A5] jt md:text-[60px] sm:text-[50px] underline hp:text-[30px] '>Lets Gets Start</h2>
            <div className='grid grid-cols-2 '>
            <div className='absolute max-w-full max-h-fit flex sm:pr-[10px]  hp:flex-col sm:flex-row '>
                <div className='relative sm:w-[50vw] h-[80vh] bottom-[120px] left-[50px] hp:w-[100%] hp:h-fit hp:bottom-[50px] divTeko'>
                <Image className='prodimg custom-img' src='/cta/teko.svg' layout="contain" width={1000} height={1000} objectFit='cover'></Image>
                
                </div>
                <div className='sm:w-[50vw] hp:w-[100%] sm:mr-[25px] '>
                  <h3 className='xl:md:text-4xl jt text-[#FAD6A5] md:text-3xl  xl:md:p-11 sm:text-2xl hp:text-lg hp:text-center sm:text-left'>
                  You can start shoping in your favorite marketplace.
                  </h3>
                  <div className='sm:flex sm:justify-between h-[150px] w-fit  hp:grid hp:grid-cols-2 hp:mx-auto '>
                    <div className='basis-1/4 xl:md:p-[0px] md:p-[10px]   xl:md:px-[0px] md:px-[1px] sm:p-[5%] xl:w-[150px] md:w-[50px] sm:w-[20px] sm:px-0 hp:w-[100px] divImg'>
                    <Image className='prodimg custom-img '  src='/start/shopee.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    </div>
                    <div className='basis-1/4  xl:md:p-[0px] md:p-[10px]  xl:md:px-[0px] md:px-[1px] sm:p-[5%] sm:px-0 hp:w-[120px] divImg'>
                    <Image className='prodimg custom-img'  src='/start/lazada.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    </div>
                    <div className='basis-1/4  xl:md:p-[0px] md:p-[20px]  xl:md:px-[0px] md:px-[0px] sm:p-[5%] sm:px-0 hp:w-[100px] divImg'>
                    <Image className='prodimg custom-img'  src='/start/tokped.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    </div>
                    <div className='basis-1/4  xl:md:p-[0px] md:p-[0px]  xl:md:px-[0px] md:px-[0px] sm:p-[0%] xl:w-[200px] sm:px-0 hp:w-[120px] hp:p-0 divImg'>
                    <Image className='prodimg custom-img hp:w-[120px]'  src='/start/tiktok.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    </div>
                  </div>   
                  <button className='bg-[#CFB997] hover:bg-[#AA8B56]  font-bold py-2 px-4 rounded-xl text-black w-[160px] h-[50px] jt mx-[40%] xl:bottom-[90px] xl:w-[200px] xl:h-[60px] xl:text-xl my-4 border border-slate-900 hp:absolute sm:bottom-[-30px] sm:right-[-50px]  hp:bottom-[-200px] hp:mx-[25%] '>Email Us!</button>                
              </div> 
                                  
            </div>   
                                                    
          </div> 

            </div>
     </div>


     <style jsx>{
      `
      .divTeko{
        opacity:0;
        transform:scale(0);
        transition:opacity 1s ease-in-out, transform 1s ease-in-out;
      }
      .divTeko.show {
        opacity:1;
        transform:scale(1);
        transition:opacity 1s ease-in-out , transform 1s ease-in-out;
      }

      .divImg{
        opacity:0;
        transform:translateX(100);
        transition:opacity 1s ease-in-out, transform 1s ease-in-out;

      }
      .divImg.swipe{
        opacity:1;
        transform:translateX(0);
        transition:opacity 1s ease-in-out, transform 1s ease-in-out;

      }

      `
     }</style>
        
        </>
    )
}