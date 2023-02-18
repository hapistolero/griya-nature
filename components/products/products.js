import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image'

export default function ProductsComponent ({scrollPosition}) {
    const [b,setB] = useState(0)
    const [currentSlide1, setCurrentSlide1] = useState(0)
    const [currentSlide2, setCurrentSlide2] = useState(1)
    const [currentSlide3, setCurrentSlide3] = useState(2) 
    let count = 0
    const [visible,setVisible] = useState(false)    
    const [click,setClick] = useState(false)
    const images = ['/products/4.jpg',
'/products/2.jpg',
'/products/3.jpg',
'/products/drink.jpg',
'/products/kitchen.jpg',
'/products/5.jpg',
'/products/6.jpg',
'/products/7.jpg',
'/products/8.jpg',
'/products/9.jpg',
'/products/10.jpg',
'/products/11.jpg',
'/products/12.jpg',
'/products/14.jpg',
'/products/15.jpg']

const productImage = [
  {
    url:`/products/4.jpg`,
    name:`Teflon`,
    price:`Rp. 150k`,
  },
  {
    url:`/products/2.jpg`,
    name:`Piring`,
    price:`Rp. 22k`,
  },
  {
    url:`/products/3.jpg`,
    name:`Garpu`,
    price:`Rp. 22k`,
  },
  {
    url:`/products/drink.jpg`,
    name:`Gelas Batok`,
    price:`Rp. 6k`,
  },
  {
    url:`/products/kitchen.jpg`,
    name:`Telenan`,
    price:`Rp. 11k`,
  },
  {
    url:`/products/5.jpg`,
    name:`Sendok`,
    price:`Rp. 6k`,
  },  
  {
    url:`/products/6.jpg`,
    name:`Payung`,
    price:`Rp. 25k`,
  },
  {
    url:`/products/7.jpg`,
    name:`Kado Teko`,
    price:`Rp. 50k`,
  },
  {
    url:`/products/8.jpg`,
    name:`Kado Mangkok`,
    price:`Rp. 105k`,
  },
  {
    url:`/products/9.jpg`,
    name:`Hampers`,
    price:`Rp. 105k`,
  },
  {
    url:`/products/10.jpg`,
    name:`Teapot`,
    price:`Rp. 100k`,
  },
  {
    url:`/products/11.jpg`,
    name:`Pengaduk Madu`,
    price:`Rp. 6k`,
  },
  {
    url:`/products/12.jpg`,
    name:`Kitchen Set`,
    price:`Rp. 120k`,
  },
  {
    url:`/products/13.jpg`,
    name:`Pisau Set`,
    price:`Rp. 49k`,
  },
  {
    url:`/products/14.jpg`,
    name:`Herbal Lambung`,
    price:`Rp. 17.5k`,
  },
  {
    url:`/products/15.jpg`,
    name:`Spatula Set`,
    price:`Rp. 90k`,
  },
]

const [isActive, setIsActive] = useState(false);
const divRef = useRef(null);
const divRef2 = useRef(null);
const divRef3 = useRef(null);
const rdr1 = useRef(null);
const rdr2 = useRef(null);
const rdr3 = useRef(null);
const rdr4 = useRef(null);
const rdr5 = useRef(null);
     
    useEffect(() =>{

        
        const handleScroll =() => {
           const productImage = document.querySelectorAll('.productImage');
           const productText = document.querySelector('.productText')
           const prodOffset  = productText.offsetTop - 150;
           let timeout = 700
          
           
            setB(scrollPosition)
            if (b > prodOffset ) {                
                productImage.forEach(element => {
                    setTimeout(() =>{
                        element.classList.add('visible')
                    },timeout)
                    timeout += 500;
                    setVisible(true)                                      
                });

                

               //handleAuto(visible)
               
            }                       

        }

        
       const handleAuto =(visible)=>{
        if(visible){
          let timeout = 1600
          let num = 0
                      
              setTimeout(() => { 
              
              
               
                setCurrentSlide1((currentSlide1+ 4) % images.length)
                             
                setCurrentSlide2((currentSlide2+ 4) % images.length)
                            
                setCurrentSlide3((currentSlide3+ 4) % images.length)
              
            },timeout)                                               
           
        }
         
              
            
          }
          
        
          
      

  

       

        handleScroll()

            window.addEventListener('scroll', handleScroll);
            
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }


    }
    )
    const handleClick = () => {        
      setIsActive(!isActive);
     
      
        
    divRef.current.classList.toggle('visible');


    divRef2.current.classList.toggle('visible');
    divRef3.current.classList.toggle('visible');
            setCurrentSlide1((currentSlide1+ 1) % images.length)
            setCurrentSlide2((currentSlide2+ 1) % images.length)
            setCurrentSlide3((currentSlide3+ 1) % images.length)
               
      
            
    
        
    }

   const handleCLear =() =>{
      rdr1.current.classList.remove('clicked') 
      rdr2.current.classList.remove('clicked') 
      rdr3.current.classList.remove('clicked') 
      rdr4.current.classList.remove('clicked') 
      rdr5.current.classList.remove('clicked') 
    }

    const handleClick1 = () =>{
      setIsActive(!isActive);
      divRef.current.classList.toggle('visible');
      divRef2.current.classList.toggle('visible');
      divRef3.current.classList.toggle('visible');
      handleCLear()
        rdr1.current.classList.toggle('clicked') 
       
     
       
              setCurrentSlide1(0)
              setCurrentSlide2(1)
              setCurrentSlide3(2)
    }

    const handleClick2 = () =>{
      setIsActive(!isActive);
      divRef.current.classList.toggle('visible');

      handleCLear()
      divRef2.current.classList.toggle('visible');
      divRef3.current.classList.toggle('visible');
      rdr2.current.classList.toggle('clicked')

      setCurrentSlide1(3)
              setCurrentSlide2(4)
              setCurrentSlide3(5)
    }

    const handleClick3 =() =>{
      setIsActive(!isActive);
      divRef.current.classList.toggle('visible');

      handleCLear()
      divRef2.current.classList.toggle('visible');
      divRef3.current.classList.toggle('visible');
      rdr3.current.classList.toggle('clicked')  
      setCurrentSlide1(6)
              setCurrentSlide2(7)
              setCurrentSlide3(8)
    }

    const handleClick4 =()=>{
      setIsActive(!isActive);
      divRef.current.classList.toggle('visible');

      handleCLear()
      divRef2.current.classList.toggle('visible');
      divRef3.current.classList.toggle('visible');
      rdr4.current.classList.toggle('clicked')     
      setCurrentSlide1(9)
              setCurrentSlide2(10)
              setCurrentSlide3(11)
    }

    const handleClick5 =() =>{
      setIsActive(!isActive);
      divRef.current.classList.toggle('visible');
      divRef2.current.classList.toggle('visible');
      divRef3.current.classList.toggle('visible');
      handleCLear()
      rdr5.current.classList.toggle('clicked')
      setCurrentSlide1(12)
              setCurrentSlide2(13)
              setCurrentSlide3(14)
    }
    return (
<>
        <div id='products' className='relative md:top-[-350px] sm:top-[-270px] -z-20 w-[100%] max-h-fit bg-[rgb(57,81,68)]  xl:md:p-[20%] md:p-[0px] xl:mt-[0px] sm:mt-[180px] hp:top-[-200px] productText '>
        <h2 className='text-center text-4xl mb-12 text jt  text-[#FAD6A5]  '>Products</h2>
          <div className=' flex xl:md:justify-between md:justify-around sm:p-[3%] sm:mx-auto jt'>
          <div ref={divRef} className={`max-w-[200px] max-h-[400px] border-2 border-black rounded-2xl bg-black overflow-hidden shadow-black shadow-md sm:m-[1%] hp:hidden sm:inline-flex  grow-1  productImage`}
          >  
          <div className={`absolute text-[#FAD6A5] z-20 pt-[90%] text-center w-[100%] h-[100%]   hover:bg-gradient-to-t hover:from-black opacity-0 hover:opacity-100 ease-in-out `}>
            <h3 className={'text-3xl '}>{productImage[currentSlide1].name}</h3>
            <p className='text-xl'>{productImage[currentSlide1].price}</p>
            </div>          
            <Image src={productImage[currentSlide1].url} className={` prodimg custom-img img bg-gradient-to-b from-black `} width={200} height={400} alt='1'></Image>
         
            
          </div>
          <div ref={divRef2} className={'max-w-[200px] max-h-[400px] border-2 border-black rounded-2xl bg-black overflow-hidden shadow-black shadow-md md:mx-[10px] sm:m-[1%] hp:mx-auto  grow-1  productImage'}>            
          <div className={`absolute text-[#FAD6A5] z-20  pt-[90%] text-center w-[100%] h-[100%]  hover:bg-gradient-to-t hover:from-black opacity-0 hover:opacity-100  `}>
          <h3 className={'text-3xl'}>{productImage[currentSlide2].name}</h3>
            <p className='text-xl'>{productImage[currentSlide2].price}</p>
          </div>
            <Image src={productImage[currentSlide2].url} className={` prodimg custom-img img bg-gradient-to-b from-black `} width={200} height={400} alt='2'></Image>
          </div>
          
          <div ref={divRef3} className={'max-w-[200px] max-h-[400px] border-2 border-black rounded-2xl bg-black overflow-hidden shadow-black shadow-md unset-img sm:m-[1%] hp:hidden sm:inline-flex grow-1   productImage'}>  {

          }    
          <div className={`absolute text-[#FAD6A5] z-20 pt-[90%] text-center w-[100%] h-[100%]  hover:bg-gradient-to-t hover:from-black opacity-0 hover:opacity-100`}>
          <h3 className={'text-3xl'}>{productImage[currentSlide3].name}</h3>
            <p className='text-xl'>{productImage[currentSlide3].price}</p>
          </div>      
            <Image className='prodimg custom-img img   '  src={productImage[currentSlide3].url} layout="fill" objectFit='cover' alt='3' ></Image>
          </div>

          

          </div>
          <div className='flex justify-evenly mt-10'>
            <div ref={rdr1} onClick={handleClick1} className='bg-[#FAD6A5] h-[15px] w-[15px] rounded-full shadow-black shadow-sm hover:bg-[#AA8B56] hover:border hover:border-[#FAD6A5] active:after:bg-bg-[#AA8B56] cursor-pointer'></div>
            <div ref={rdr2} onClick={handleClick2} className='bg-[#FAD6A5] h-[15px] w-[15px] rounded-full shadow-black shadow-sm hover:bg-[#AA8B56] hover:border hover:border-[#FAD6A5] active:after:bg-bg-[#AA8B56] cursor-pointer'></div>
            <div ref={rdr3} onClick={handleClick3} className='bg-[#FAD6A5] h-[15px] w-[15px] rounded-full shadow-black shadow-sm hover:bg-[#AA8B56] hover:border hover:border-[#FAD6A5] active:after:bg-bg-[#AA8B56] cursor-pointer'></div>
            <div ref={rdr4} onClick={handleClick4} className='bg-[#FAD6A5] h-[15px] w-[15px] rounded-full shadow-black shadow-sm hover:bg-[#AA8B56] hover:border hover:border-[#FAD6A5] active:after:bg-bg-[#AA8B56] cursor-pointer'></div>
            <div ref={rdr5} onClick={handleClick5} className='bg-[#FAD6A5] h-[15px] w-[15px] rounded-full shadow-black shadow-sm hover:bg-[#AA8B56] hover:border hover:border-[#FAD6A5] active:after:bg-bg-[#AA8B56] cursor-pointer'></div>
          </div>

        </div>


          <style jsx>
            {
                `
                @keyframes example {
                  from {
                    opacity: 0;
                    
                    
                  }to{
                    opacity: 1;                    
                    
                  }
                }

                .upDown{
                  animation: example 1.6s ease-in-out infinite;
                }
                .productImage{
                    opacity: 0;
                    transform: translateY(-100%);
                    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
                }

                .productImage.visible{
                    opacity:1;
                    transform: translateY(0);
                    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

                }
                .productImage.visible:hover{
                  border: 1px solid #FAD6A5;
                  box-shadow: 3px 4px 8px #FAD6A5;
                  transform: scale(1.1)                


              }
                .slider {
                  animation: example 3s infinite,background-image 3s ease-in-out infinite ;                  
                }
                
                .clicked {
                  background-color: #AA8B56;
                  border: 1px solid #FAD6A5;
                }

                h3, p {
                  text-shadow: 1px 1px 1px rgba(233, 233, 233, 0.5);                
                  
                }
                
                `
            }
          </style>

</>
    )
}