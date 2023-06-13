import React, { ReactNode, useState } from "react";
import Nav from "./header/nav";
import Cart from "./cart/cart";
import Footer from "./contact us/contact.tsx";

interface propPage{
    children:  ReactNode,
    page: String
}

export default function Layout(props:propPage) {
   

   

    const {children, page}= props
    console.log(children.props)

   

    

    return (
        <>
        <div className="mx-auto  overflow-x-hidden w-full h-fit">
       <Nav page={page} />
        
         <main className="  overflow-x-hidden w-full h-full">{children}</main>

{page !== 'landing' ? <Cart /> : null }
         

        <Footer/>

        </div>
    
   

    </>
    )

}