'use client'
import Image from "next/image";
import img from "../assets/awesome.jpg";
import Services from "../components/Services";
import SubscribeNewsletter from "../components/SubscribeNewsletter";
import { redirect, useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  // const handle = () => {
  //   console.log('i m being clicked')
  //   router.push("/about-us")
  //   // redirect('http://localhost:3000/about-us', "push")
  // }
  return (
    <main className="px-10 lg:px-20 w-[100%]">
      <section className="w-[100%] lg:h-[75vh] h-auto snap-start flex my-20 lg:my-0 lg:flex-row flex-col">
        <h1 className="my-auto
        text-3xl lg:text-4xl xl:text-5xl lg:w-[70%] w-[100%] text-center lg:text-left mt-12 font_thin relative -z-10 h-[80%] lg:translate-y-[20%]">
          Home is Where the Heart is,
          <br />
          <span className="font-bold text-4xl lg:text-5xl xl:text-6xl text_playfair">
            Discover Yours in Our Exclusive Listings
          </span>
        </h1>
          <Image
            src={img}
            alt="Property"
            className="relative mt-10 mx-auto w-[auto] h-auto xl:h-[80%] lg:w-[60%] -z-20"
          />
      </section>
      <section className="snap-start">
        <Services />
      </section>
      <section className="snap-start">
      <SubscribeNewsletter />
      </section>
    </main>
  );
}
