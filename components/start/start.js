import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import Modal from '../modalBox/modal'

export default function Start({scrollPosition}){
  const [b,setB] = useState(0)
  const[open, setOpen] = useState(false)
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
        <div id='start' className={`xl:relative xl:top-[900px] bg-gradient-to-b from-[#395144] via-[#4E6C50] to-[#395144]  md:bottom-[-30px] md:mb-[10%] sm:relative sm:top-[50px] hp:bottom-[-50px] xl:bottom-[0px] h-[100%]  mt-[50px] divCont`}>
        <div className='xl:relative  '>
            <h2 className='text-center text-[#FAD6A5] jt md:text-[60px] sm:text-[50px] underline hp:text-[30px] '>Lets Gets Start</h2>
            <div className='grid grid-cols-2 '>
            <div className='absolute max-w-full max-h-fit flex sm:translate-x-[-15px]  hp:flex-col sm:flex-row '>
                <div className='relative  sm:w-[50vw] xl:h-[80vh]   bottom-[200px] left-[50px] hp:w-[100%] hp:h-fit hp:bottom-[50px] divTeko'>
                <Image className='prodimg custom-img' src='/cta/teko.svg' layout="contain" width={1000} height={1000} objectFit='cover'></Image>
                
                </div>
                <div className='sm:w-[50vw] hp:w-[100%] sm:mr-[25px] '>
                  <h3 className='xl:md:text-4xl jt text-[#FAD6A5] md:text-3xl  xl:md:p-11 sm:text-2xl hp:text-lg hp:text-center sm:text-left'>
                  You can start shoping in your favorite marketplace.
                  </h3>
                  <div className='sm:flex sm:justify-between h-[150px] w-fit  hp:grid hp:grid-cols-2 hp:mx-auto hp:translate-x-[15px]'>
                    <div className='basis-1/4 xl:md:p-[0px] md:p-[10px]   xl:md:px-[0px] md:px-[1px] sm:p-[5%] xl:w-fit md:w-[50px] sm:w-[20px] sm:px-0 hp:w-[100px]   divImg'>
                    <Image className='prodimg custom-img max-w-[100%] max-h-[100%] '  src='/start/shopee.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    </div>
                    <div className='basis-1/4  xl:md:p-[0px] md:p-[10px]  xl:md:px-[0px] md:px-[1px] sm:p-[5%] xl:w-fit sm:px-0 hp:w-[120px] divImg'>
                    <Image className='prodimg custom-img max-w-[100%]'  src='/start/lazada.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    </div>
                    <div className='basis-1/4  xl:md:p-[0px] md:p-[20px]  xl:md:px-[0px] md:px-[0px] sm:p-[5%] xl:w-fit sm:px-0 hp:w-[100px] divImg'>
                    <Image className='prodimg custom-img max-w-[100%]'  src='/start/tokped.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    </div>
                    <div className='basis-1/4  xl:md:p-[0px] md:p-[0px]  xl:md:px-[0px] md:px-[0px] sm:p-[0%] xl:w-fit sm:px-0 hp:w-[120px] hp:p-0 divImg'>
                    <Image className='prodimg custom-img hp:w-[120px]  max-w-[100%]'   src='/start/tiktok.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    </div>
                  </div>   
                  <button onClick={()=> setOpen(true)}  className='bg-[#CFB997] hover:bg-[#AA8B56]  font-bold py-2 px-4 rounded-xl text-black w-[160px] h-[50px] jt mx-[40%] xl:bottom-[90px] xl:w-[200px] xl:h-[60px] xl:text-xl my-4 border border-slate-900 xl:static md:relative hp:absolute sm:bottom-[-30px] sm:right-[-50px]  hp:bottom-[-200px] hp:mx-[25%] hp:translate-x-[23px] '>Email Us!</button>                
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
 <Modal open={open} onClose={() => setOpen(false)}/>       
        </>
    )
}