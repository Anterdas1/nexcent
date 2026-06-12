import { Button } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen mx-auto ">
      <div className="hero-content flex-col lg:flex-row-reverse">
       <Image
       src="/hero.png"
       width={350}
       height={350}
       alt="kana"
       />
        <div className="w-2xl">
          <h1 className="text-5xl font-bold">Lessons and insights <br /> <span className="text-[#428475]"> from 8 years</span> </h1>
          <p className="py-6">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button className='rounded-lg bg-[#428475]'>Regester</Button>
        </div>
      </div>
    </div>
  );
}
