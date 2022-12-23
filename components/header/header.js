import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from "react";

export default function Header (){
    const [sizeX, setSizeX] = useState(0)
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
     
      const handleScroll = () => {
        setScrollY(window.scrollY);
        
      };

      const handleResizeX = () => {
        setSizeX(window.innerWidth)
      }

  
      // just trigger this so that the initial state 
      // is updated as soon as the component is mounted
      // related: https://stackoverflow.com/a/63408216
      handleScroll();
      handleResizeX();
  
      window.addEventListener("scroll", handleScroll);
      window.addEventListener('resize', handleResizeX)
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener('resize', handleResizeX)
      
        
        
      };
    }
    )

   console.log(sizeX);
    let a= scrollY*2.4;
    let b= -530-(-scrollY);
    let c= scrollY/10;
    let d = scrollY

    let x = sizeX/100;
    if(scrollY > 530){
        a= 1253
        c= 53
        b= 0
        d= 0
    }else if(scrollY > 0){
        d= scrollY -50
    }
   
    
    return (
        <header className='flex sticky top-[0] w-full  max-h-full z-50'>

                <div className='flex justify-start fixed top-[0] max-w-2xl max-h-20'
                style={{
                    left: `${a}px`,
                }}>                     
                 <ul className='flex justify-around fixed left-[-530px] bg-[#395144] text-[20px] h-[72px] pt-[20px]  text-[#FAD6A5] jt z-50 shadow-black shadow-sm'
             style={{
                left: `${b}px`,
            }}
             >
                <li className='jli'><Link href='/'>Home</Link></li>
                <li className='jli'><Link href='/'>Benefits</Link></li>
                <li className='jli'><Link href='/'>Products</Link></li>
                <li className='jli'><Link href='/'>Testimonials</Link></li>
                <li className='jli'><Link href='/'>About Us</Link></li>
                <li className='jli'><Link href='/'>Faq</Link></li>
                <li className='jli'><Link href='/'>Lets Go!</Link></li>
            </ul> 
            <style jsx>{
                `
                .jli{
                    padding-left: ${c}px;
                    padding-right: ${c}px;

                }

                .jli:hover{
                    color:#FFD27D;
                }
                .divImg{
                    left: ${d}px;
                }
                .navlogo{
                  height:60px;
                  width:60px;
                }
                
               
                `
            }
                
            </style>
           
                
                <Image  className="relative left-[-20vh] top-[-3px] h-[80px] min-w-max md:min-h-max md:min-w-max sm:min-h-max divImg "  src='/navbar/navbarShape.svg' layout='contain' width={1000} height={10000}></Image>
                    <div className='absolute flex max-w-fit max-h-fit m-0 left-[0px]'>
                    <div className=' navlogo absolute ml-6 '>
                        
                    <Image className=" relative z-50 mt-[3px]" src='/navbar/logo.svg' layout='fill'  object-fit="contain" ></Image>
                   
                    </div>                   
                     <h1 className='ml-4 pt-4 relative text-2xl font-[Pattaya] text-[#FAD6A5] z-50 left-[75%]'>Griya Nature</h1>                    
                    </div>

                </div>                    
                
        </header>
        
    )
}