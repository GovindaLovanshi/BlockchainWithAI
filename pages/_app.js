import Head from "next/head"
import "../styles/globals.css";

import { StateContextProvider } from "../Context";


export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
       <link ref="icon" href="../public/assets/images/favicon.png"/>
     </Head>

     <StateContextProvider>
     <Component {...pageProps} />
     </StateContextProvider>

     <script src="../public/assets/js/bootstrap.bundle.min.js"></script>
     <script src="../public/assets/js/swiper-bundle.min.js"></script>
     <script src="../public/assets/js/aos.js"></script>
     <script src="../public/assets/js/custom-aos.js"></script>
     <script src="../public/assets/js/home-animation.js"></script>
     <script src="../public/assets/js/header_sticky.js"></script>
     <script src="../public/assets/js/script.js"></script>
     <script src="../public/assets/js/bootstrap.bundle.min.js"></script>
    
     
    </>
        
  );
}
