import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from "react";

export default function Header (){
    const [move, setMove] = useState(0)
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
     
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      // just trigger this so that the initial state 
      // is updated as soon as the component is mounted
      // related: https://stackoverflow.com/a/63408216
      handleScroll();
      
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        
        
      };
    }
    )
    let a= scrollY*2.4;
    let b= -530-(-scrollY);
    let c= scrollY/10;
    let d = scrollY
    if(scrollY > 530){
        a= 1253
        c= 53
        b= 0
        d= 0
    }else if(scrollY > 0){
        d= scrollY -50
    }
   
    
    return (
        <header className='flex sticky top-[0] w-full  h-[80px] z-50'>
           
            


             


                <div className='flex justify-start fixed top-[0]  w-[60%] h-[80px]'
                style={{
                    left: `${a}px`,
                }}>                     
                 <ul className='flex justify-around fixed left-[-530px] bg-[#395144] text-[20px] h-[72.5px] pt-[20px]  text-[#FAD6A5] jt z-50'
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
                `
            }
                
            </style>
                
                <Image  className="relative left-[-20vh] top-[-3px] divImg z-50"  src='/navbar/navbarShape.svg' layout='contain' width={1000} height={10000}></Image>
                    <div className='absolute flex  w-fit h-fit m-0 left-[0px]'>
                    <div>
                        
                    <Image className=" relative m-2 z-50 " src='/navbar/logo.svg' layout='contain' width={60} height={60}  ></Image>
                    </div>                   
                     <h1 className='ml-4 mt-4 relative text-2xl font-[Pattaya] text-[#FAD6A5] shadow-lg z-50'>Griya Nature</h1>                    
                    </div>

                </div>
                

           
        
           
            
           
       
        </header>
    )
}