import React, {useState} from "react";
import Layout from "../../components/layout";
import ProductDetails from "../../components/detail/detail";
import Cart from "../../components/cart/cart";


interface Product{
    url:string
    name: string
    price: string
    detail:string
}
interface ProductDetailProps{
    product: Product
    addToCartProps: ()=> void

}


export default function productDetails(props:ProductDetailProps){

const {addToCartProps} =props
    const [cart,setCart] = useState(0)

  
    const handleAddToCart = () => {
        setCart(cart + 1);
        addToCartProps(); // Call the addToCartProps function
      };

    

  

    return(
        <>
           <Layout page='details'>
           <ProductDetails DetailProps={props}/>
    
           </Layout>
           

        

        </>
    )


}

export async function getServerSidePaths() {
    const res = await fetch(`http://localhost:3000/api/products`)
    const dataProducts =  await res.json()
    const paths = dataProducts.map((product: Product) => {
        return {
            params: {
                id: `${product.name}`,
               }
        }
     
    });
    return {
        paths,
        fallback: false
    }
}

interface GetStaticProps{
    params:{
        id:string
    }
}

export async function getServerSideProps(context: GetStaticProps) {
    const { id } = context.params
    console.log(id)
    const res = await fetch(`http://localhost:3000/api/products`)
    const product =  await res.json()
         
    return {
        props: {
            product : product.filter((product)=> product.name === id)
        }
    }
}