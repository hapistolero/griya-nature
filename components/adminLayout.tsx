import React,{ReactNode} from 'react'
import SideNav from './sidenav/sidenav'
import Nav from './header/nav'

interface adminLayoutProps{
    children: ReactNode,
}


export default function AdminLayout(props:adminLayoutProps){
    const {children} = props
    return(
        <>
        
            
        
        <div className="mx-auto  overflow-x-hidden w-full h-fit  ">
            <Nav page={'admin'}/>
          
           <main className='flex  h-fit w-full md:flex-row hp:flex-col'>
            <SideNav/>
            <div className='bg-white h-[100vh] md:h-[37.5em] hp:h-[100vh] w-[80%] overflow-y-scroll md:w-[75%] xl:w-[80%] hp:w-full hp:h-full  '>{children}</div>

           </main>
            
            
       
     
        
        </div>
       
       

        </>
    )
}