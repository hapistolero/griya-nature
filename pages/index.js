import { ReactNode} from 'react'
import Header from '../components/header/header.js'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function Home() {
 
  return (
    
    <>
     <Header/>
     
     <div className='top-0 absolute w-[100%] h-[100vh] bg-gradient-to-r from-blue-500 j'>
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

      </div>
    
     </div>   
    </>
   
  )

  
}




 