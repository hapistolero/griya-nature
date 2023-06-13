import React from "react";
import ProductsAdmin from "../../../components/productsadmin/productsadmin";
import AdminLayout from "../../../components/adminLayout";

interface productsAdminProps{
    data:Array<any>
}

export default function index(props:productsAdminProps){
const{data} = props
    return(
        <>
        <AdminLayout>
            <ProductsAdmin data={data}/>
        </AdminLayout>

        </>
    )
}

export async function getServerSideProps(ctx) {

    const res = await fetch("http:localhost:3000/api/products")
   
      const data=  await res.json()
     
      return {
        props: {
          data:data
          
        }
      }
    }