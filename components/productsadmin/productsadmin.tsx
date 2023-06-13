import React from "react";
import Image from "next/image";

interface data{
    data:Array<any>
}

export default function ProductsAdmin(props:data){

    const{data} =props



    return(
        <>
        <section className="w-full h-full bg-white  md:mt-[7em] mb-[10em] ">
        <h1 className="text-center mt-7 md:text-[2em]">Products</h1>
        <button className=" w-[80%] h-[3em] bg-yellow-600 mx-auto mt-5 block rounded-lg"> + Tambah product</button>

        <div className="w-[90%] h-fit border m-auto rounded-lg my-7 ">
            <table className="h-full w-full mb-10 ">
            <tr className="border border-black bg-blue-400">
            <th>Nama</th>
            <th>Harga</th>
            <th>Stok</th>
            <th>action</th>
        </tr>
        {data.map((dat,i=1)=>(
          

             <tr key={i}>
            <td className="border border-black text-center h-fit flex flex-col justify-center"><Image className="mx-auto rounded-lg my-2 border-black shadow-sm shadow-black" alt={`product`} width={100} height={100} src={dat.url}/>{dat.name}</td>
            <td className="border border-black text-center">{dat.price}</td>
            <td className="border border-black text-center">100</td>
            <td className="border border-black text-center "><button className="bg-red-600 border border-black rounded-lg  p-[2px] w-[50%] text-white"> hapus</button> <button className="bg-green-400 border border-black rounded-lg mx-1 p-[3px] w-[50%] my-2 "> edit</button> </td>
        </tr>
        ))}
        </table>
        </div>
        </section>

        </>
    )
}