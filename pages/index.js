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
      <div className='h-fit'>
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

          <div className='mx-auto'>
            <div className=''><h2 className='text-center text-4xl mb-12 text jt  text-[#FAD6A5] mt-60 underline'>Testimonials</h2></div>
            <div className='h-[70vh] w-[140vh] border-[#FAD6A5]  mt-7 border-2 rounded-xl p-[10%] flex shadow-black shadow-md '>
              <div className='max-w-[200px] max-h-[400px] self-center border-2 mr-3 border-[#FAD6A5] rounded-full bg-black overflow-hidden shadow-black shadow-md unset-img grow-[1] '>
              <Image className='prodimg custom-img' src='/testimonials/a.png' layout="fill" objectFit='cover'></Image>
              </div>
              <div className='jt text-[#FAD6A5] grow-2 h-3[100%]'>
                <span className='text-[150px] jt p-0 m-0 h-0 w-0 inline-block relative bottom-[50px]'>“</span>
                <div className='relative top-[-100px]'>
                <p className='inline'>John Doe - Customer</p><span> ⭐⭐⭐⭐⭐</span>
                <h4 className='text-3xl'>Amazing Customer Services</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, 
                  nibh sit amet varius pulvinar, mauris enim rhoncus lorem, quis blandit mauris 
                  nulla vitae mi. Phasellus ac neque justo.</p>
                </div>          
                <span className='text-[150px] jt p-0 m-0 relative left-[80%] bottom-[70%]'>”</span>
                  <div className='flex relative bottom-[120%] w-[50%] '>
                  <span className='flex bg-[#FAD6A5] h-2 w-6' ></span>
                  <span className='flex bg-[#FAD6A5]  ml-1 h-2 w-3 '></span>
                  <span className='flex bg-[#FAD6A5] ml-1 h-2 w-2 '></span>
                  </div>                                                  
              </div>              
            </div>
            <div className='h-[70vh] w-[140vh] border-[#FAD6A5]  mt-7 border-2 rounded-xl p-[10%] flex shadow-black shadow-md '>
              <div className='max-w-[200px] max-h-[400px] self-center border-2 mr-3 border-[#FAD6A5] rounded-full bg-black overflow-hidden shadow-black shadow-md unset-img grow-[1] '>
              <Image className='prodimg custom-img' src='/testimonials/a.png' layout="fill" objectFit='cover'></Image>
              </div>
              <div className='jt text-[#FAD6A5] grow-2 h-3[100%]'>
                <span className='text-[150px] jt p-0 m-0 h-0 w-0 inline-block relative bottom-[50px]'>“</span>
                <div className='relative top-[-100px]'>
                <p className='inline'>John Doe - Customer</p><span> ⭐⭐⭐⭐⭐</span>
                <h4 className='text-3xl'>Amazing Customer Services</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, 
                  nibh sit amet varius pulvinar, mauris enim rhoncus lorem, quis blandit mauris 
                  nulla vitae mi. Phasellus ac neque justo.</p>
                </div>          
                <span className='text-[150px] jt p-0 m-0 relative left-[80%] bottom-[70%]'>”</span>
                  <div className='flex relative bottom-[120%] w-[50%] '>
                  <span className='flex bg-[#FAD6A5] h-2 w-6' ></span>
                  <span className='flex bg-[#FAD6A5]  ml-1 h-2 w-3 '></span>
                  <span className='flex bg-[#FAD6A5] ml-1 h-2 w-2 '></span>
                  </div>                                                  
              </div>              
            </div>
            <div className='h-[70vh] w-[140vh] border-[#FAD6A5]  mt-7 border-2 rounded-xl p-[10%] flex shadow-black shadow-md '>
              <div className='max-w-[200px] max-h-[400px] self-center border-2 mr-3 border-[#FAD6A5] rounded-full bg-black overflow-hidden shadow-black shadow-md unset-img grow-[1] '>
              <Image className='prodimg custom-img' src='/testimonials/a.png' layout="fill" objectFit='cover'></Image>
              </div>
              <div className='jt text-[#FAD6A5] grow-2 h-3[100%]'>
                <span className='text-[150px] jt p-0 m-0 h-0 w-0 inline-block relative bottom-[50px]'>“</span>
                <div className='relative top-[-100px]'>
                <p className='inline'>John Doe - Customer</p><span> ⭐⭐⭐⭐⭐</span>
                <h4 className='text-3xl'>Amazing Customer Services</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, 
                  nibh sit amet varius pulvinar, mauris enim rhoncus lorem, quis blandit mauris 
                  nulla vitae mi. Phasellus ac neque justo.</p>
                </div>          
                <span className='text-[150px] jt p-0 m-0 relative left-[80%] bottom-[70%]'>”</span>
                  <div className='flex relative bottom-[120%] w-[50%] '>
                  <span className='flex bg-[#FAD6A5] h-2 w-6' ></span>
                  <span className='flex bg-[#FAD6A5]  ml-1 h-2 w-3 '></span>
                  <span className='flex bg-[#FAD6A5] ml-1 h-2 w-2 '></span>
                  </div>                                                  
              </div>              
            </div>
            
            
          </div>
         
        </div>
        <div className='relative bottom-[3%] bg-black max-w-[100%] h-fit max-h-fit flex'>
              <div className='w-[50%] border border-1 border-[#FAD6A5] h-fit flex'>
                <div className='w-[50%]'>
                <Image className='prodimg custom-img'  src='/products/gift.jpg' layout="fill" objectFit='cover'></Image>
                </div>
                <div className='flex flex-col w-[50%]'>
                <div className='h-[45vh]' >
                <Image className='prodimg custom-img'  src='/products/gift.jpg' layout="fill" objectFit='cover'></Image>
                </div>
                <div className='h-[45vh]'>
                <Image className='prodimg custom-img'  src='/products/gift.jpg' layout="fill" objectFit='cover'></Image>
                </div>
                </div>

              </div>
              <div className='w-[50%] grow-[1] max-h-fit border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt'>
              <h2>About Us</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, 
                  nibh sit amet varius pulvinar, mauris enim rhoncus lorem, quis blandit mauris 
                  nulla vitae mi. Phasellus ac neque justo.
              </p>
              </div>                          
            </div>
            <div className='relative bottom-[3%] bg-black max-w-[100%] h-[170vh]'>
              <h2 className='jt text-center text-[#FAD6A5] p-[50px] text-[40px] h-fit '>FAQ</h2>
            <div className='relative bottom-[3%] bg-black  grid grid-cols-2 gap-[10%] px-7 py-5 '>
              <div className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl'>How to Buy?</div>
              <div className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl'>How to Buy?</div>
              <div className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl'>How to Buy?</div>
              <div className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl'>How to Buy?</div>
              <div className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl'>How to Buy?</div>
              <div className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl'>How to Buy?</div>
        </div>         
        <div className=' relative faq max-w-full jt h-[200px] top-[270px] mb-[100px] '> </div>
            </div>
            <div className='mt-[25%]'>
            <h2 className='text-center text-[#FAD6A5] jt text-[60px] underline '>Lets Gets Start</h2>
            <div className='grid grid-cols-2'>
            <div className='absolute max-w-full h-[100vh] flex '>
              <div className='relative w-[50vw] h-[80vh] bottom-[120px] left-[50px]'>
                <Image className='prodimg custom-img' src='/cta/teko.svg' layout="contane" width={1000} height={1000} objectFit='cover'></Image>
                
                </div>
                <div className='w-[50vw]  '>
                  <h3 className='text-4xl jt text-[#FAD6A5] p-11'>
                  You can start shoping in your favorite marketplace.
                  </h3>
                  <div className='flex justify-between h-[150px]'>
                    <div className='basis-1/4 p-[15px] px-[25px]'>
                    <Image className='prodimg custom-img'  src='/start/shopee.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    </div>
                    <div className='basis-1/4  p-[15px] px-[10px]'>
                    <Image className='prodimg custom-img'  src='/start/lazada.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    </div>
                    <div className='basis-1/4  p-[15px] px-[25px]'>
                    <Image className='prodimg custom-img'  src='/start/tokped.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    </div>
                    <div className='basis-1/4  p-[10px] px-[20px]'>
                    <Image className='prodimg custom-img'  src='/start/tiktok.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    </div>
                  </div>   
                  <button className='bg-[#CFB997] hover:bg-[#AA8B56] font-bold py-2 px-4 rounded-xl text-black w-[160px] h-[50px] jt mx-[40%] border border-slate-900'>Email Us!</button>                
              </div> 
                                  
            </div>   
                                                    
          </div> 

            </div>
            
            <div className=' relative w-[100%] h-[100px] bg-black mt-[50%] jt text-[#FAD6A5] px-[15px]'>
              <div className='text-center text-lg'>contact us</div>
              <div className='flex justify-around py-[20px]'>
              <div className='flex'><Image className='' src='/footer/gmail.svg' width={20} height={20} ></Image>Griya.nature@gmail.com</div>
              <div className='flex ml-[7%]'>
              <Image className='ml-[20px]' src='/footer/instagram.svg' width={20} height={20} ></Image>
              <Image className='ml-[20px]' src='/footer/tiktok.svg' width={20} height={20} ></Image>
              <Image className='ml-[20px]' src='/footer/whatsapp.svg' width={20} height={20} ></Image>
              </div>              
              <div className='flex text-xs'>
              <Image className='' src='/footer/location.svg' width={20} height={20} ></Image>
              simowau indah blok a no 47
              sepanjang taman sidoarjo.
              </div>
              </div>
                
              </div>   
      
                                                         
      </div>  
     
     
                            
     </div>   
      
    

    
    
    </>
   
  )

  
}




 