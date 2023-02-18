import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='scroll-smooth' style={{scrollBehavior:'smooth'}} >
 <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Averia+Sans+Libre:wght@300&family=Averia+Serif+Libre:wght@300&family=Pattaya&display=swap" rel="stylesheet" />
    <Head/>              
      <body className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}