import Link from "next/link";
import YouTubePlayer from "./YoutubePlayer";
import ShowMap from "./ShowMap";
import Image from "next/image";

export default function ProductDetail(item: any) {
  const {
    baths,
    baths_half,
    baths_full,
    beds,
    garage,
    lot_sqft,
    sqft,
    stories,
    type,
    year_built,
    list_price,
    city,
    lat,
    lon,
    line,
    postal_code,
    state,
    state_code,
    name,
    href,
  } = item.item;
  const photos = item.item.images.split(" ");
  photos.pop();

  const video = item.item.virtual_tours;


  const youtubeVideo = video.includes("youtu.be" || "youtube");


  const videoId =
    youtubeVideo && video.slice(video.lastIndexOf("/") + 1, video.length - 1);


  return (
    <div className="bg-white border border-gray-200 w-[90%] mx-auto xl:w-[80%] p-5 m-5 text_lato drop-shadow-xl -z-50">
      <Link className="bg-blue-200 p-3 text-xl rounded-full" href={"/products"}>
        &#8592;
      </Link>
      {href && (
        <Link href={photos[0]} target="_blank">
          <Image
            className="mt-5 mb-10 mx-auto"
            src={href}
            alt="Primary Photo of Property"
            width={900}
            height={1100}
          />
        </Link>
      )}

      <div className="flex flex-wrap w-[87%] mx-auto">
        <h1 className="w-[100%] text_playfair  text-4xl font-light lg:text-5xl ">
          Description
        </h1>

        <div className="w-[50%] flex flex-col items-center my-5 lg:flex-row">
          <Image
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/empty-bed.png"
            alt="empty-bed"
            className="lg:mx-4"
          />
          <p>{beds} Bedrooms</p>
        </div>

        <div className="w-[50%] flex flex-col items-center my-5 lg:flex-row">
          <Image
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/bath.png"
            alt="bath"
            className="lg:mx-4"
          />
          <p>
            {baths} Bathrooms ({baths_half} Half, {baths_full} Full)
          </p>
        </div>

        {garage && (
          <div className="w-[50%] flex flex-col items-center my-5 lg:flex-row">
            <Image
              width="64"
              height="64"
              src="https://img.icons8.com/glyph-neue/64/garage.png"
              alt="garage"
              className="lg:mx-4"
            />
            <p>{garage} Garages</p>
          </div>
        )}

        <div className="w-[50%] flex flex-col items-center my-5 lg:flex-row">
          <Image
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/escalator-down.png"
            alt="Floors"
            className="lg:mx-4"
          />

          <p>{stories} Floors</p>
        </div>

        <div className="w-[50%] flex flex-col items-center my-5 lg:flex-row">
          <Image
            src="/sqft_icon.png"
            alt="Squarefoot"
            width="60"
            height="60"
            className="lg:mx-4"
          />
          <p>{sqft} Sqft</p>
        </div>

        <div className="w-[50%] flex flex-col items-center my-5 lg:flex-row">
          <Image
            src="/build.png"
            alt="Built In Year"
            width="60"
            height="60"
            className="lg:mx-4"
          />
          <p>Built in {year_built}</p>
        </div>
      </div>

      <div className="flex flex-wrap w-[87%] mx-auto">
        <h1 className="w-[100%] text_playfair  text-4xl font-light lg:text-5xl mt-4">
          Price
        </h1>
        <p>{list_price}</p>
      </div>

      <div className="flex flex-wrap w-[87%] mx-auto">
        <h1 className="w-[100%] text_playfair  text-4xl font-light lg:text-5xl mt-4">
          Address
        </h1>

        <div className="flex flex-col">
          <div className="flex">
            <h3 className="text-xl text_playfair  font-light">City:</h3>
            &nbsp;
            <p className="text-xl">{city}</p>
          </div>

          <div className="flex">
            <h3 className="text-xl text_playfair  font-light">State:</h3>
            &nbsp;
            <p className="text-xl">{state}</p>
          </div>

          <div className="flex">
            <h3 className="text-xl text_playfair  font-light">
              Street Address:
            </h3>
            &nbsp;
            <p className="text-xl">
              {line}, {state_code}, {postal_code}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:mx-14 mx-4">
        <h1 className="w-[100%] text_playfair  text-4xl font-light mt-4 lg:text-5xl">
          Location:
        </h1>
        <ShowMap latitude={lat} longitude={lon} />
      </div>

      {youtubeVideo && (
        <div className="w-[90%] mx-auto">
          <h1 className="w-[100%] text_playfair  text-4xl font-light mt-4 lg:text-5xl">
            Virtual Tour
          </h1>
          <YouTubePlayer videoId={videoId} />
        </div>
      )}
    </div>
  );
}
