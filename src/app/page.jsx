import Image from "next/image";

const Homepage = () => {
  return <div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* IMAGE CONTAINER */}
    <div className=" h-1/2 lg:h-full lg:w-1/2  relative">
      <Image src="/hero.png" alt="" fill className="object-contain"/>
    </div>

    {/* TEXT CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
      {/* TITLE */}
      <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experience, Designing Tomorrow.</h1>
      {/* Description */}
      <p className="md:text-xl"> welcome to my degital canvas, where innovation and creativity converge.</p>
      {/* Buttons */}
      <div className="flex gap-4 w-full">
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
        <button className="p-4 rounded-lg ring-1  ring-black">Contact me</button>
      </div>
    </div>
  </div>;
};

export default Homepage;
