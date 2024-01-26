import Image from "next/image";
import Link from "next/link";

type cardProps = {
    title: string,
    description : string,
}


export default  function Card({title, description} : cardProps) {

  const image = require(`/assets/${title}.gif`)
  
  return (
    <div className="shadow-gray-500 border-gray-200 border bg-white drop-shadow-xl w-[100%] p-8 mt-14 md:w-[25%] h-auto 
    // md:h-[300px]
    ">
      <Link href={'/products'}>Look here</Link>
      <div className="h-[50px] w-[50px] mx-auto mb-3"> 
        <Image src={image} alt={title}className="w-[100%]" />
      </div>
        <h3 className="text-2xl text-center">{title}</h3>
        <p className="py-5 mt-2 text-gray-500 text_lato">{description}</p>
    </div>
  )
}

