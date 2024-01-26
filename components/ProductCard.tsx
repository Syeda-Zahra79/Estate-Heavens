// 'use client';
import Image from "next/image";
import Link from "next/link";

function arrayToString(array: any[]) {
  let images = ''
  for(const item in array) {
      images += array[item].href
      images += ' ';
  }
  return images
}


export default function ProductCard( item : any) {

  
  const {description : {baths, baths_half, baths_full, beds, garage, lot_sqft, sqft, stories, type, year_built},list_price, location : {address : {city, line, postal_code, state, state_code}, county : {name}}, primary_photo: {href} } = item.item;
  
  let lat, lon;
  if (item.item.location.address.coordinate) {
   lat = item.item.location.address.coordinate.lat
   lon = item.item.location.address.coordinate.lon
  }
 
  const images = arrayToString(item.item.photos)
  const tours = item.item.virtual_tours;
  const virtual_tours = tours != null && tours.length > 0 && arrayToString(tours)

  return (
    <div className="bg-white border border-gray-200 w-[100%] md:w-[40%] lg:w-[20%] p-5 md:m-5 mt-10 text_lato drop-shadow-xl">
      {href && (
        <div className="w-[100%] relative flex justify-center">
        <img src={href} alt="primary photo of property" className="object-contain w-[100%] h-[100%]" />
        </div>
      )}

      <div className="flex flex-col h-[45%] md:h-[20%] md:flex-row md:justify-between flex-wrap my-5">
        <div className="flex m-2">
          <Image
            width="20"
            height="20"
            src="https://img.icons8.com/dotty/80/bedroom.png"
            alt="bedroom"
          />
          <p className="text-xs text-blue-600">&nbsp;{beds} Bedrooms</p>
        </div>

        <div className="flex m-2">
          <Image
            width="20"
            height="20"
            src="https://img.icons8.com/dotty/80/wc.png"
            alt="wc"
          />
          <p className="text-xs text-blue-600">&nbsp;{baths} Baths</p>
        </div> 

        {garage && (
            <div className="flex m-2">
            <Image
                width="20"
                height="20"
                src="https://img.icons8.com/dotty/80/garage.png"
                alt="garage"
            />
            <p className="text-xs text-blue-600">&nbsp;{garage} Garage</p>
            </div>
        )}

        <div className="flex m-2">
          <Image
            width="20"
            height="20"
            src="https://img.icons8.com/dotty/80/marker.png"
            alt="marker"
          />
          <p className="text-xs text-blue-600">&nbsp;{city}</p>
        </div>

      </div>


        <p>Price : <span className="font-semibold">
        ${list_price} 
        </span>
        </p>    
        <Link
        href={{
            pathname:'/products/productDetail',
            query: {baths, baths_half, baths_full, beds, garage, lot_sqft, sqft, stories, type, year_built,list_price, city, lat, lon, line, postal_code, state, state_code, name, images,href, virtual_tours }
            }}>
        <button className="mt-4 py-3 w-[100%] bg-blue-200 cursor-pointer">See More</button>
        </Link>
    </div>
  );
}
