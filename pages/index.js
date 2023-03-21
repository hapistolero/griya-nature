import { ReactNode, useEffect, useRef, useState} from 'react'
import Header from '../components/header/header.js'
import Jumbotron from '../components/jumbotron/jumbotron.js'
import Image from 'next/image'
import Head from 'next/head'
import Benefits from '../components/benefits/benefit.js'
import ProductsComponent from '../components/products/products.js'
import Testi from '../components/testi/testi.js'
import About from '../components/about/about.js'
import Faq from '../components/faq/faq.js'
import Start from '../components/start/start.js'
import Contact from '../components/contact us/contact.js'
import Modal from '../components/modalBox/modal.js'

const handleClick = (event) =>{
  

  
}

export default function Home() {
  const scrollY2 = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(scrollY2.current.scrollTop)
  }

  useEffect(() =>{
    
    window.addEventListener('scroll', handleScroll)
  },[])
 
  return (
    
    <>
    <Head>
      <title>Griya Nature</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta http-equiv="Content-Language" content="en"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
     
     <div className="scroll  scroll-smooth  " ref={scrollY2} onScroll={handleScroll} style={{scrollBehavior:'smooth'}}>
    
     
     <Header scrollPosition={scrollPosition}  class="scroll scroll-smooth " ref={scrollY2} onScroll={handleScroll} style={{scrollBehavior:'smooth'}}/>
    
      
      <Jumbotron/>
      <Benefits scrollPosition={scrollPosition}></Benefits>                                      
      <ProductsComponent scrollPosition={scrollPosition}/>
     <Testi scrollPosition={scrollPosition}/> 
     <div  className='xl:absolute xl:h-fit md:h-[1300px] sm:h-[1300px] xl:top-[4300px] '>
     <About className={``}/>      
      <Faq scrollPosition={scrollPosition}/>       
     </div>           
<Start scrollPosition={scrollPosition}/>          
<Contact/>

<div></div>

                                                                                                                   
      </div>  
     
     
                                                             
    </>
   
  )

  
}




 