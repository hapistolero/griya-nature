import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image'



export default function Faq({scrollPosition}) {

    const [b, setB] = useState(0)

    useEffect(() =>{
        const handleScroll = () =>{
            const divFaq = document.querySelector('.divFaq')
            const scale = document.querySelectorAll('.scaleUp')
            const right = document.querySelectorAll('.right')
            const divFaqOffSet = divFaq.offsetTop - 0
            let timeout = 700
            setB(scrollPosition)

            if(b> divFaqOffSet){
                console.log('ok')
              scale.forEach(element => {
                setTimeout(() =>{
                    element.classList.add('testi')

                },timeout)
                timeout += 300;                
                
                
            });
            right.forEach(element => {
              setTimeout(() =>{
                  element.classList.add('testi')

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
        <div id='faq' className='relative bottom-[3%] bg-black max-w-[100%]  xl:md:h-[170vh] divFaq'>
              <h2 className='jt text-center text-[#FAD6A5] p-[50px] text-[40px] h-fit '>FAQ</h2>
            <div className='relative bottom-[3%] bg-black  grid grid-cols-2 gap-[10%] px-7 py-5 '>
              <div className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl hover:shadow-md cursor-pointer hover:shadow-[#FAD6A5] hover:scale-105 transition-transform ease-in-out duration-500 scaleUp'>How to Buy?</div>
              <div className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl hover:shadow-md cursor-pointer hover:shadow-[#FAD6A5] hover:scale-105 transition-transform ease-in-out duration-500 scaleUp'>How to Buy?</div>
              <div className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl hover:shadow-md cursor-pointer hover:shadow-[#FAD6A5] hover:scale-105  transition-transform ease-in-out duration-500 scaleUp'>How to Buy?</div>
              <div className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl hover:shadow-md cursor-pointer hover:shadow-[#FAD6A5] hover:scale-105 transition-transform ease-in-out duration-500 scaleUp'>How to Buy?</div>
              <div className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl hover:shadow-md cursor-pointer hover:shadow-[#FAD6A5] hover:scale-105 transition-transform ease-in-out duration-500 scaleUp '>How to Buy?</div>
              <div className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl hover:shadow-md cursor-pointer hover:shadow-[#FAD6A5] hover:scale-105 transition-transform ease-in-out duration-500 scaleUp'>How to Buy?</div>
        </div>         
        <div className=' relative faq max-w-full jt h-[200px] xl:top-[275px] md:top-[198px] mb-[100px] sm:top-[198px] sm:bg-cover hp:top-[125px] hp:bg-contain hp:bg-no-repeat bg:h-[100px]  '> </div>
            </div>

            <style jsx>
                {
                    `
                    .scaleUp.testi{
                        opacity: 1;
                        transform: scale(1);
                        transition: opacity 1s ease-in-out, transform 1s ease-in-out;
                    }

                    .scaleUp.testi:hover{
                        opacity: 1;
                        transform: scale(1.02);
                        transition: opacity 1s ease-in-out, transform 1s ease-in-out;
                    }


                    left.testi{
                        opacity: 1;
                        transform: translateX(0%);
                        transition: opacity 1s ease-in-out, transform 1s ease-in-out;

                    }

                    .right{
                        opacity: 0;
                        transform: translateX(-100%);
                        transition: opacity 1s ease-in-out, transform 1s ease-in-out;
                    }

                    .scaleUp{
                        opacity: 0;
                        transform: scale(0);
                        transition: opacity 1s ease-in-out, transform 1s ease-in-out;
                    }
    
                    .left{
                        opacity: 0;
                        transform: translateX(100%);
                        transition: opacity 1s ease-in-out, transform 1s ease-in-out;
                    }
                    `
                }
            </style>
        </>
    )
}