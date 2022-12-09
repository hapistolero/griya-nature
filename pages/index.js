import { ReactNode} from 'react'
import Header from '../components/header/header.js'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function Home() {
 
  return (
    
    <>
     <Header/>
     {/* jumbotron */}
     <div className='top-0 absolute w-[100%] h-[150vh] bg-gradient-to-r from-blue-500 j'>
      <div className=' pl-[20px] pt-[35vh] font-[Averia Sans Libre] w-[50vw]'>
      <h1 className='text-[#F2EAE0] text-[50px] font-[Averia Serif Libre] jt'>The Magic Of Kitchen Herbal Drink And Gift</h1>
      <p className='text-[#F2EAE0] font-[Averia Serif Libre] jt' >Lorem ipsum dolor sit amet, consectetur
         adipiscing elit. Nulla consectetur porta ex,
          auctor accumsan nisi convallis vehicula. 
          Proin vel augue aliquet, mattis ligula ac,
           facilisis ipsum. Integer tincidunt maximus
            efficitur. Duis vehicula mi nunc, ut ultrices
             libero egestas interdum. Nam porta quam 
             sapien, ornare accumsan leo facilisis nec.
              Aliquam erat volutpat.</p>
              <button className='bg-[#CFB997] hover:bg-[#AA8B56] font-bold py-2 px-4 rounded text-black w-[160px] h-[50px] jt'>Mulai</button>
      </div>
      <div className='h-[10000px]'>
         {/* benefits */}
      <div className= '  p-[23%] w-[150%] h-[200vh] bn bottom-[50px]  relative left-[-170px] bg-no-repeat text-lg font-bold'>
      <h2 className='text-4xl pl-[25%] mb-6'>Why Choose Our Store?</h2>

      <div className='grid grid-cols-3 pr-[5%] grid-rows-2 gap-y-[30%]'>
      <div className='w-fit h-fit text-center'>          
        <Image src='/benefits/trust.svg' width={200} height={200} alt='trust'></Image> 
        <h3 className='bn'>Trusted And Safe</h3>
        </div>

        <div className='w-fit h-fit text-center pt-11'>          
        <Image src='/benefits/gift.svg' width={200} height={500} alt='gift'></Image> 
        <h3 className='bn'>Wrapping Gift Service</h3>
        </div>

        <div className='w-fit h-fit text-center'>          
        <Image src='/benefits/unique.svg' width={200} height={500} alt='gift'></Image> 
        <h3 className='bn'>Unique Products</h3>
        </div>
      
      <div className='w-fit h-fit text-center pl-[50%]'>          
        <Image src='/benefits/avail.svg' width={200} height={500} alt='gift'></Image> 
        <h3 className='bn'>Available In Various  Online Marketplaces</h3>
        </div>

        <div className='w-fit h-fit text-center pl-[50%]'>          
        <Image src='/benefits/service.svg' width={200} height={500} alt='gift'></Image> 
        <h3 className='bn'>Best Services</h3>
        </div>

      </div>
       
        </div>
        
        <div className=' relative top-[-250px] -z-20 w-[100%] max-h-fit bg-[#395144]  p-[20%] '>
          <h2 className='text-center text-4xl mb-12 text jt  text-[#FAD6A5]'>Products</h2>
          <div className='flex justify-between'>
          <div className='max-w-fit max-h-fit border-2 border-black rounded-2xl bg-black overflow-hidden shadow-black shadow-md'>            
            <Image src='/products/drink.jpg' width={200} height={400}></Image>
          </div>
          <div className='max-w-fit max-h-fit border-2 border-black rounded-2xl bg-black overflow-hidden shadow-black shadow-md'>            
            <Image src='/products/kitchen.jpg' width={200} height={400}></Image>
          </div>
          <div className='max-w-[200px] max-h-[400px] border-2 border-black rounded-2xl bg-black overflow-hidden shadow-black shadow-md unset-img'>            
            <Image className='prodimg custom-img'  src='/products/gift.jpg' layout="fill" objectFit='cover' ></Image>
          </div>

          

          </div>
          <div className='flex justify-evenly mt-10'>
            <div className='bg-[#FAD6A5] h-[15px] w-[15px] rounded-full shadow-black shadow-sm'></div>
            <div className='bg-[#FAD6A5] h-[15px] w-[15px] rounded-full shadow-black shadow-sm'></div>
            <div className='bg-[#FAD6A5] h-[15px] w-[15px] rounded-full shadow-black shadow-sm'></div>
            <div className='bg-[#FAD6A5] h-[15px] w-[15px] rounded-full shadow-black shadow-sm'></div>
            <div className='bg-[#FAD6A5] h-[15px] w-[15px] rounded-full shadow-black shadow-sm'></div>
          </div>

          <div>
            <div className=''><h2 className='text-center text-4xl mb-12 text jt  text-[#FAD6A5] mt-60 underline'>Testimonials</h2></div>
            <div className='h-[70vh] w-[140vh] border-[#FAD6A5]  mt-7 border-2 rounded-lg p-[10%]'>
              <div className='max-w-[200px] max-h-[400px] border-2 border-[#FAD6A5] rounded-full bg-black overflow-hidden shadow-black shadow-md unset-img '>
              <Image className='prodimg custom-img' src='/testimonials/a.png' layout="fill" objectFit='cover'></Image>
              </div>
              <div>
                <p className='text-[10000px]'>" kontol</p>
              </div>
              
            </div>
            <div></div>
            <div></div>
            
          </div>
         
        </div>
      </div>    
     
     
     </div>   

    
    
    </>
   
  )

  
}




 