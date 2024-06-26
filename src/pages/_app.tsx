import '@/styles/globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true); //set server side rendering to true

  useEffect(() => {
    setIsSSR(false); //this code here is executed client side(inside react)
  }, []); //run only at the start thus [] empty
  
  if(isSSR) return null; //if we are server side rendering we don't want to show our components
  
  //doing this will wrap this into a template string to avoid undefined errors from typescript I mean the one with the token below
  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}> 
      <div className='xl:w-[1200px] m-auto overflow-hidden h-[100vh]'>
        <Navbar />
        <div className='flex gap-6 md:gap-20 '>
          <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
            <Sidebar />
          </div>
          <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default MyApp