'use client';
import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

type SearchProps = {
  handleClickRefresh : () => void 
}

export default function Search({handleClickRefresh}: SearchProps) {
    const router = useRouter()

    const [location, setLocation] = useState("")

    const handleClick = () => {
    
        if(location !== ""){
          const url = `/products?location=${location}`
          router.replace(url)
          handleClickRefresh();            
        }
                
    }
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center md:h-[200px] lg:mx-0 md:w-[100%] w-[70%] mt-8 md:mt-0 mx-auto z-0">

    <h1 className="text-2xl md:text-3xl font-bold text_playfair mr-4">Search Properties by City</h1>
    
    <div className="flex bg-white border border-gray-300 shadow-gray-500 md:mt-0 mt-4 w-[100%] md:w-[80%] lg:w-[60%] justify-between drop-shadow-lg text-black z-0">
        <input type="text" placeholder="e.g Santa Monica" value={location} onChange={e => setLocation(e.target.value)} className="p-4 w-full outline-none" />
        <button>
             <Image onClick={handleClick} className="bg-white cursor-pointer border-none my-4 mr-3" src="/search.png" alt="search--v1" width={30} height={30} />
        </button>
    </div>
    </div>
  )
}
