import Card from "./Card"

export default function Services() {
  return (
    <div className="mx-7 my-10 mb-32">
        <h1 className="md:text-5xl text-4xl mx-7 md:mx-16 mt-3 font-bold text-center md:text-left text_playfair">Our Services</h1>
        <h3 className="mx-7 md:mx-16 mt-8 w-[90%] lg:w-[60%] md:text-left text-center  font-light md:text-3xl text-2xl">Where our commitment is to make your real estate journey seamless and rewarding.</h3>
        <div className="flex md:flex-row flex-col md:justify-evenly flex-wrap items-center">
            <Card
                title="Communication"
                description="Each property design has it's own meaning and we are ready to help you to get according to your taste."
            />
            <Card
                title="Services"
                description="Each property design has it's own meaning and we are ready to help you to get according to your taste."
            />
            <Card
                title="Quick"
                description="Each property design has it's own meaning and we are ready to help you to get according to your taste."
            />
        </div>
    </div>
  )
}

