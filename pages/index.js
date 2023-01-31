import { ReactNode, useRef, useState} from 'react'
import Header from '../components/header/header.js'
import Image from 'next/image'
import Head from 'next/head'



export default function Home() {
  const scrollY2 = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(scrollY2.current.scrollTop)
    console.log(scrollPosition)
  }
 
  return (
    
    <>
    <Head>
      <title>Griya Nature</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta http-equiv="Content-Language" content="en"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
     
     <div class="scroll" ref={scrollY2} onScroll={handleScroll}>
     <Header scrollPosition={scrollPosition}/>
    
       {/* jumbotron */}
     <div className='top-0 absolute max-w-[100%] sm:max-h-[150vh] bg-gradient-to-r from-black  bg-blend-multiply  j xl:bg-center sm:bg-left-bottom hp:bg-center hp:max-h-full md:bg-[left_bottom_-3rem]'>
      <div className=' pl-[20px] md:xl:pt-[35vh] md:pt-[19vh] sm:pt-[16vh] font-[Averia Sans Libre] sm:w-[50%]  hp:w-[100%] sm:mt-[15%] sm:my-[5%] hp:mt-[20%] sm:text-left hp:text-center xl:mt-0'>
      <h1 className='text-[#F2EAE0] md:xl:text-[50px] md:text-[35px] sm:text-[30px] font-[Averia Serif Libre] jt hp:text-[22px] hp:w-[100%] drop-shadow-md sm:mt-0 hp:mt-[100%] '>The Magic Of Kitchen, Herbal Drink And Gift</h1>
      <p className='text-[#F2EAE0] font-[Averia Serif Libre] jt md:xl:text-base md:text-lg sm:text-base hp:text-base hp:w-[100%] drop-shadow-md shadow-white xl:text-2xl ' >Berikan kenangan, kesehatan dan waktu makan malam yang berarti bagi orang terkasih.</p>
              <button className='bg-[#CFB997] hover:bg-[#AA8B56] font-bold py-2 px-4 rounded text-black md:xl:w-[160px] md:xl:h-[50px] md:w-[120px]  md:h-[45px] jt hp: hp:w-[50%] m-2'>Mulai</button>
      </div>
      <div className='h-fit'>
         {/* benefits */}
      <div className= 'md:p-[23%] w-[150%] sm:h-[210vh] hp:h-[2100px] md:w-[150%] xl:bg-contain  bn xl:relative xl:bottom-[270px] md:bottom-[150px]   relative left-[-170px] bg-no-repeat text-lg font-bold hp:bottom-[260px]  md:pt-[25%] sm:mt-[160px]  hp:bg-cover '>
      <h2 className='md:xl:text-4xl md:text-3xl xl:pl-[26%] md:pl-[30%] md:xl:mb-6 md:mb-4 md:sm:pt-[15%] md:xl:p-0 sm:pl-[40%] sm:pt-[30%] sm:text-2xl hp:pl-[60vw]  hp:pt-[460px]  hp:text-[25px]'>Why Choose Our Store?</h2>

      <div className='grid md:grid-cols-3 md:pr-[5%] md:pt-[0%] md:pl-[5%] grid-rows-2 gap-y-[30%] md:pb-[20%] sm:pl-[25%] xl:pl-[12%]  sm:grid-cols-2 sm:gap-0 sm:gap-y-12  xl:pt-[0vh] sm:pt-[0vh] sm:w-fit sm:h-fit sm:gap-x-24 hp:flex hp:flex-col hp:gap-20 sm:grid sm:ml-[0%] hp:ml-[48%] '>
      <div className='w-fit h-fit text-center  sm:content-center sm:pl-[15%] border border-white  hp:mt-[70px]  '>          
        <Image className='md:w-[150px] md:h-[150px] ' src='/benefits/trust.svg' width={200} height={200} alt='trust'></Image> 
        <h3 className='bn'>Trusted And Safe</h3>
        </div>

        <div className='w-fit h-fit text-center pt-11 hp:pt-0 md:pl-[0%] border border-white sm:mt-[45%]'>          
        <Image className='sm:w-[200px] hp:w-[200px] ' src='/benefits/gift.svg' width={200} height={500} alt='gift'></Image> 
        <h3 className='bn'>Wrapping Gift Service</h3>
        </div>

        <div className='w-fit h-fit text-center sm:pl-[15%] md:relative md:right-[50px] border border-white md:top-[25%] '>          
        <Image className='md:w-[150px] md:h-[150px] hp:w-[200px]' src='/benefits/unique.svg' width={200} height={500} alt='gift'></Image> 
        <h3 className='bn'>Unique Products</h3>
        </div>
      
      <div className='w-fit h-fit text-center xl:pl-[45%] md:pl-[45%] md:relative md:left-10  '>          
        <Image src='/benefits/avail.svg' width={200} height={500} alt='gift'></Image> 
        <h3 className='bn md:text-[16px] break-normal w-[200px]'>Available In Various Online Marketplaces</h3>
        </div>

        <div className='w-fit h-fit text-center md:xl:pl-[0%] md:pl-[00%] sm:pl-[15%] sm:relative md:bottom-0 sm:bottom-[60px] md:relative md:left-32'>          
        <Image src='/benefits/service.svg' width={200} height={500} alt='gift'></Image> 
        <h3 className='bn '>Best Services</h3>
        </div>

      </div>
       
        </div>
        
        <div className=' relative md:top-[-350px] sm:top-[-270px] -z-20 w-[100%] max-h-fit bg-[rgb(57,81,68)]  xl:md:p-[20%] md:p-[0px] xl:mt-[0px] sm:mt-[180px] hp:top-[-200px]'>
          <h2 className='text-center text-4xl mb-12 text jt  text-[#FAD6A5]'>Products</h2>
          <div className='flex xl:md:justify-between md:justify-around sm:p-[3%]'>
          <div className='max-w-fit max-h-fit border-2 border-black rounded-2xl bg-black overflow-hidden shadow-black shadow-md sm:m-[1%] hp:hidden sm:inline-flex'>            
            <Image src='/products/drink.jpg' width={200} height={400}></Image>
          </div>
          <div className='max-w-fit max-h-fit border-2 border-black rounded-2xl bg-black overflow-hidden shadow-black shadow-md md:mx-[10px] sm:m-[1%] hp:mx-auto'>            
            <Image src='/products/kitchen.jpg' width={200} height={400}></Image>
          </div>
          <div className='max-w-[200px] max-h-[400px] border-2 border-black rounded-2xl bg-black overflow-hidden shadow-black shadow-md unset-img sm:m-[1%] hp:hidden sm:inline-flex'>            
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

          <div className='mx-auto   max-h-fit max-w-[140vh]  flex flex-col center '>
            <div className=''><h2 className='text-center text-4xl mb-12 text jt  text-[#FAD6A5] mt-60 underline'>Testimonials</h2></div>

            <div className=' md:max-h-[70vh]  md:max-w-[95vw] sm:max-h-[85vh] hp:max-h-[85vh]   sm:max-w-[80vw] hp:max-w-[90vw] hp:mx-auto sm:mx-auto border-[#FAD6A5]  mt-7 border-2 rounded-xl p-[10%] flex shadow-black shadow-md md:flex-row sm:flex-col hp:flex-col'>
              <div className='md:max-w-[200px] md:max-h-[400px] self-center border-2 mr-3 border-[#FAD6A5] rounded-full bg-black overflow-hidden shadow-black shadow-md unset-img md:xl:grow-[1] md:w-[150%] sm:max-w-[150px] md:relative sm:absolute sm:max-h-[300px] hp:max-h-[130px] hp:absolute hp:max-w-[130px]'>
              <Image className='prodimg custom-img' src='/testimonials/a.png' layout="fill" objectFit='cover'></Image>
              </div>
              <div className='jt text-[#FAD6A5] md:xl:grow-2 h-3[100%] xl:bottom-4 xl:relative sm:static md:top-[0%] md:mt-[5%] sm:mt-[65%] hp:mt-[60%] '>
                <span className='md:xl:text-[150px] md:text-[140px] jt p-0 m-0 h-0 w-0 inline-block relative bottom-[50px] md:bottom-[85px] sm:pb-[0px] sm:relative sm:bottom-[120px] hp:relative hp:bottom-[70px] hp:text-[80px] sm:text-[80px] '>“</span>
                <div className='relative top-[-100px] sm:top-[-150px] hp:text-center md:text-left'>
                <p className='inline hp:text-2xl  '>John Doe - Customer</p><span className='hp:text-xl'> ⭐⭐⭐⭐⭐</span>
                <h4 className='md:xl:text-3xl md:text-2xl hp:font-bold hp:text-lg sm:text-2xl sm:text-left'>Amazing Customer Services</h4>
                <p className='md:xl:text-base md:text-base hp:text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, 
                  nibh sit amet varius pulvinar, mauris enim rhoncus lorem, quis blandit mauris 
                  nulla vitae mi. Phasellus ac neque justo.</p>
                  <div className='flex absolute xl:top-[20px] md:bottom-[-20px] md:w-[50%] md:relative sm:absolute  sm:bottom-[-20px] hp:static hp:pt-[10px]'>
                  <span className='flex bg-[#FAD6A5] h-2 w-6' ></span>
                  <span className='flex bg-[#FAD6A5]  ml-1 h-2 w-3 '></span>
                  <span className='flex bg-[#FAD6A5] ml-1 h-2 w-2 '></span>
                  </div> 
                  <span className='md:xl:text-[150px] md:text-[140px] jt p-0 m-0 relative left-[80%] xl:bottom-[100%] md:bottom-[90%] sm:p-[20px] text-[80px] sm:top-[60%] sm:absolute hp:absolute hp:top-[210px]'>”</span>
                      
                </div>   
                    
                
                                                                 
              </div>              
            </div>
            <div className='md:max-h-[70vh]  md:max-w-[95vw] sm:max-h-[85vh] hp:max-h-[85vh]   sm:max-w-[80vw] hp:max-w-[90vw] hp:mx-auto sm:mx-auto border-[#FAD6A5]  mt-7 border-2 rounded-xl p-[10%] flex shadow-black shadow-md md:flex-row sm:flex-col hp:flex-col'>
              <div className='md:max-w-[200px] md:max-h-[400px] self-center border-2 mr-3 border-[#FAD6A5] rounded-full bg-black overflow-hidden shadow-black shadow-md unset-img md:xl:grow-[1] md:w-[150%] sm:max-w-[150px] md:relative sm:absolute sm:max-h-[300px] hp:max-h-[130px] hp:absolute hp:max-w-[130px]'>
              <Image className='prodimg custom-img' src='/testimonials/a.png' layout="fill" objectFit='cover'></Image>
              </div>
              <div className='jt text-[#FAD6A5] md:xl:grow-2 h-3[100%] xl:bottom-4 xl:relative sm:static md:top-[0%] md:mt-[5%] sm:mt-[65%] hp:mt-[60%]'>
                <span className='md:xl:text-[150px] md:text-[140px] jt p-0 m-0 h-0 w-0 inline-block relative bottom-[50px] md:bottom-[85px] sm:pb-[0px] sm:relative sm:bottom-[120px] hp:relative hp:bottom-[70px] hp:text-[80px] sm:text-[80px]'>“</span>
                <div className='relative top-[-100px] sm:top-[-150px] hp:text-center md:text-left'>
                <p className='inline hp:text-2xl md:text-left'>John Doe - Customer</p><span className='hp:text-xl'> ⭐⭐⭐⭐⭐</span>
                <h4 className='md:xl:text-3xl md:text-2xl hp:font-bold hp:text-lg sm:text-2xl sm:text-left'>Amazing Customer Services</h4>
                <p className='md:xl:text-base md:text-base hp:text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, 
                  nibh sit amet varius pulvinar, mauris enim rhoncus lorem, quis blandit mauris 
                  nulla vitae mi. Phasellus ac neque justo.</p>
                  <div className='flex absolute xl:top-[20px] md:bottom-[-20px] md:w-[50%] md:relative sm:absolute  sm:bottom-[-20px] hp:static hp:pt-[10px]'>
                  <span className='flex bg-[#FAD6A5] h-2 w-6' ></span>
                  <span className='flex bg-[#FAD6A5]  ml-1 h-2 w-3 '></span>
                  <span className='flex bg-[#FAD6A5] ml-1 h-2 w-2 '></span>
                  </div> 
                  <span className='md:xl:text-[150px] md:text-[140px] jt p-0 m-0 relative left-[80%] xl:bottom-[100%] md:bottom-[90%] sm:p-[20px] text-[80px] sm:top-[60%] sm:absolute hp:absolute hp:top-[210px]'>”</span>
                      
                </div>          
                                                              
              </div>              
            </div>
            <div className='md:max-h-[70vh]  md:max-w-[95vw] sm:max-h-[85vh] hp:max-h-[85vh]   sm:max-w-[80vw] hp:max-w-[90vw] hp:mx-auto sm:mx-auto border-[#FAD6A5]  mt-7 border-2 rounded-xl p-[10%] flex shadow-black shadow-md md:flex-row sm:flex-col hp:flex-col'>
              <div className='md:max-w-[200px] md:max-h-[400px] self-center border-2 mr-3 border-[#FAD6A5] rounded-full bg-black overflow-hidden shadow-black shadow-md unset-img md:xl:grow-[1] md:w-[150%] sm:max-w-[150px] md:relative sm:absolute sm:max-h-[300px] hp:max-h-[130px] hp:absolute hp:max-w-[130px]'>
              <Image className='prodimg custom-img' src='/testimonials/a.png' layout="fill" objectFit='cover'></Image>
              </div>
              <div className='jt text-[#FAD6A5] md:xl:grow-2 h-3[100%] xl:bottom-4 xl:relative sm:static md:top-[5%] md:mt-[5%] sm:mt-[65%] hp:mt-[60%] '>
                <span className='md:xl:text-[150px] md:text-[140px] jt p-0 m-0 h-0 w-0 inline-block relative bottom-[50px] md:bottom-[85px] sm:pb-[0px] sm:relative sm:bottom-[120px] hp:relative hp:bottom-[70px] hp:text-[80px] sm:text-[80px]'>“</span>
                <div className='relative top-[-100px] sm:top-[-150px] hp:text-center md:text-left'>
                <p className='inline hp:text-2xl md:text-left'>John Doe - Customer</p><span className='hp:text-xl'> ⭐⭐⭐⭐⭐</span>
                <h4 className='md:xl:text-3xl md:text-2xl hp:font-bold hp:text-lg sm:text-2xl sm:text-left'>Amazing Customer Services</h4>
                <p className='md:xl:text-base md:text-base hp:text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, 
                  nibh sit amet varius pulvinar, mauris enim rhoncus lorem, quis blandit mauris 
                  nulla vitae mi. Phasellus ac neque justo.</p>
                  <div className='flex absolute xl:top-[20px] md:bottom-[-20px] md:w-[50%] md:relative sm:absolute  sm:bottom-[-20px] hp:static hp:pt-[10px] '>
                  <span className='flex bg-[#FAD6A5] h-2 w-6' ></span>
                  <span className='flex bg-[#FAD6A5]  ml-1 h-2 w-3 '></span>
                  <span className='flex bg-[#FAD6A5] ml-1 h-2 w-2 '></span>
                  </div> 
                  <span className='md:xl:text-[150px] md:text-[140px] jt p-0 m-0 relative left-[80%] xl:bottom-[100%] md:bottom-[90%] sm:p-[20px] text-[80px] sm:top-[60%] sm:absolute hp:absolute hp:top-[210px]'>”</span>
                      
                </div>          
                                                                 
              </div>              
            </div>
            
            
          </div>
         
        </div>
        <div className='relative bottom-[3%] bg-black max-w-[100%] h-fit max-h-fit flex hp:flex-col sm:flex-row'>
              <div className='w-[50%] border border-1 border-[#FAD6A5] h-fit flex hp:w-[100%]'>
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
              <div className='w-[50%] hp:w-[100%] grow-[1] max-h-fit border border-1 border-[#FAD6A5] text-[#FAD6A5] xl:md:p-[12%] md:sm:p-[5%] md:sm:pt-[25%] sm:pt-[25%] sm:px-2 text-center jt sm:h-[90.3vh] hp:h-[300px] hp:p-[12%] '>
              <h2 className='text-xl xl:text-3xl'>About Us</h2>
              <p className='xl:text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, 
                  nibh sit amet varius pulvinar, mauris enim rhoncus lorem, quis blandit mauris 
                  nulla vitae mi. Phasellus ac neque justo.
              </p>
              </div>                          
            </div>
            <div className='relative bottom-[3%] bg-black max-w-[100%]  xl:md:h-[170vh]'>
              <h2 className='jt text-center text-[#FAD6A5] p-[50px] text-[40px] h-fit '>FAQ</h2>
            <div className='relative bottom-[3%] bg-black  grid grid-cols-2 gap-[10%] px-7 py-5 '>
              <div className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl'>How to Buy?</div>
              <div className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl'>How to Buy?</div>
              <div className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl'>How to Buy?</div>
              <div className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl'>How to Buy?</div>
              <div className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl'>How to Buy?</div>
              <div className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl'>How to Buy?</div>
        </div>         
        <div className=' relative faq max-w-full jt h-[200px] xl:top-[275px] md:top-[198px] mb-[100px] sm:top-[198px] sm:bg-cover hp:top-[125px] hp:bg-contain hp:bg-no-repeat bg:h-[100px]  '> </div>
            </div>
            <div className='mt-[25%] sm:pt-[10%] '>
            <h2 className='text-center text-[#FAD6A5] jt md:text-[60px] sm:text-[50px] underline hp:text-[30px] '>Lets Gets Start</h2>
            <div className='grid grid-cols-2 '>
            <div className='absolute max-w-full max-h-fit flex sm:pr-[10px]  hp:flex-col sm:flex-row '>
                <div className='relative sm:w-[50vw] h-[80vh] bottom-[120px] left-[50px] hp:w-[100%] hp:h-fit hp:bottom-[50px]'>
                <Image className='prodimg custom-img' src='/cta/teko.svg' layout="contain" width={1000} height={1000} objectFit='cover'></Image>
                
                </div>
                <div className='sm:w-[50vw] hp:w-[100%] sm:mr-[25px] '>
                  <h3 className='xl:md:text-4xl jt text-[#FAD6A5] md:text-3xl  xl:md:p-11 sm:text-2xl hp:text-lg hp:text-center sm:text-left'>
                  You can start shoping in your favorite marketplace.
                  </h3>
                  <div className='sm:flex sm:justify-between h-[150px] w-fit  hp:grid hp:grid-cols-2 hp:mx-auto '>
                    <div className='basis-1/4 xl:md:p-[0px] md:p-[10px]   xl:md:px-[0px] md:px-[1px] sm:p-[5%] xl:w-[150px] md:w-[50px] sm:w-[20px] sm:px-0 hp:w-[100px]'>
                    <Image className='prodimg custom-img '  src='/start/shopee.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    </div>
                    <div className='basis-1/4  xl:md:p-[0px] md:p-[10px]  xl:md:px-[0px] md:px-[1px] sm:p-[5%] sm:px-0 hp:w-[120px]'>
                    <Image className='prodimg custom-img'  src='/start/lazada.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    </div>
                    <div className='basis-1/4  xl:md:p-[0px] md:p-[20px]  xl:md:px-[0px] md:px-[0px] sm:p-[5%] sm:px-0 hp:w-[100px]'>
                    <Image className='prodimg custom-img'  src='/start/tokped.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    </div>
                    <div className='basis-1/4  xl:md:p-[0px] md:p-[0px]  xl:md:px-[0px] md:px-[0px] sm:p-[0%] xl:w-[200px] sm:px-0 hp:w-[120px] hp:p-0'>
                    <Image className='prodimg custom-img hp:w-[120px]'  src='/start/tiktok.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    </div>
                  </div>   
                  <button className='bg-[#CFB997] hover:bg-[#AA8B56]  font-bold py-2 px-4 rounded-xl text-black w-[160px] h-[50px] jt mx-[40%] xl:bottom-[90px] xl:w-[200px] xl:h-[60px] xl:text-xl my-4 border border-slate-900 hp:absolute sm:bottom-[-30px] sm:right-[-50px]  hp:bottom-[-200px] hp:mx-[25%] '>Email Us!</button>                
              </div> 
                                  
            </div>   
                                                    
          </div> 

            </div>
            
            <div className=' relative w-[100%] h-[100px] bg-black mt-[50%] jt text-[#FAD6A5] px-[15px] sm:h-fit sm:top-0 hp:top-[550px] hp:h-fit '>
              <div className='text-center text-lg'>contact us</div>
              <div className='flex justify-around py-[20px] md:flex-row sm:flex-col hp:flex-col'>
              <div className='flex xl:md:pl-[0%] md:ml-[2%] md:mb-[0px] md:pt-2 sm:mb-[10px] md:text-base marker:sm:text-lg'><Image className='' src='/footer/gmail.svg' width={20} height={20} ></Image>Griya.nature@gmail.com</div>
              <div className='flex xl:md:ml-[12%] md:pl-[14%] sm:ml-[0%] md:mb-0 sm:mb-[10px] hp:my-3'>
              <Image className='md:ml-[20px] sm:ml-0 ' src='/footer/instagram.svg' width={20} height={20} ></Image>
              <Image className='ml-[20px]' src='/footer/tiktok.svg' width={20} height={20} ></Image>
              <Image className='ml-[20px]' src='/footer/whatsapp.svg' width={20} height={20} ></Image>
              </div>              
              <div className='flex text-xs xl:md:pl-[0%] md:ml-[20%] md:mr-[0%] md:relative sm:mb-[10px] md:text-xs sm:text-base break-normal '>
              <Image className='' src='/footer/location.svg' width={20} height={20} ></Image>
              Simowau Indah blok A no 47,
              Sepanjang, Taman, Sidoarjo.
              </div>
              </div>
                
              </div>   
      
                                                         
      </div>  
     
     
                            
     </div>   

     </div>
    
      
    

    
    
    </>
   
  )

  
}




 