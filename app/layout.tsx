import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Image from 'next/image'
import img_1 from '../assets/top.png'
import Footer from '../components/Footer'



export const metadata: Metadata = {
  title: 'Estate Heavens',
  description: 'Real Estate Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className='z-0'>

        {children} 
        </div>
        <Image src={img_1} alt='background-style-image' className='-z-30 w-[700px] h-[450px] absolute top-0' />  
        <Footer />
      </body>
    </html>
  )
}
