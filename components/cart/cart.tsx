import React from "react";
import Image from "next/image";
export default function Cart(){

    return(
        <>
        <div className="h-fit w-fit bg-green-400 fixed top-[80%] right-2 z-[1000] rounded-full flex justify-center items-center border-2 border-black">
<div className="h-[1.2em] w-[1.2em] bg-red-600 rounded-full  absolute flex justify-center items-center top-[0.8em] left-[0.8em] text-white">1</div>
        <Image   className="h-[4em] w-[4em] p-2 " alt='image product' width={200} height={200} src={'/cart/cart.png'}/>

        </div>
        </>
    )
}