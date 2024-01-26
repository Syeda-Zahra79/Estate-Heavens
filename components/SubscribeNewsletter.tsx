
export default function SubscribeNewsletter() {
  return (
    <div className="md:ml-10 ">
        <h1 className="text_playfair md:text-4xl text-3xl text-center md:text-left">Subscribe to Our Newsletter</h1>
        <h5 className="font-thin text-xl md:text-2xl text-center md:text-left">Get the latest updates</h5>
        <div className="flex w-[100%] md:w-[60%] md:flex-row mt-5 flex-col">
            <input type="text" placeholder="johndoe@gmail.com" className='md:w-[65%] w-[100%] mx-auto md:mx-0 border-gray-200 border bg-white drop-shadow-xl  px-2 outline-none py-2' />
            <button className=" w-[50%] md:w-auto mt-5 md:mt-0 bg-blue-200 font-bold text_lato md:py-3 py-4 md:px-5 text-sm mx-auto md:mx-0 md:text-lg">Subscribe Now</button>
        </div>
    </div>
  )
}

