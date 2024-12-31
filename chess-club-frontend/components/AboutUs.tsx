import React from 'react'
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from 'next/image';
import ChessBoard from "@/public/ChessBoard.png"

const AboutUs = () => {
  return (
    <div className='section mt-6 mb-14'>
        <div className='banner bg-grey text-green font-bold m-10 mb-16'>
            About Us
        </div>
        <div className="md:px-28 p-10 ml:p-0 ml:w-[40%] mt-0 pt-0">
      <div className="flex flex-row h-full items-center shadow-lg bg-grey rounded-2xl p-8 text-black">
        <div className="flex w-full">
          <div className="ms:size-full ms:mr-4 flex justify-center max-size-[250px]">
            <Image 
              src={ChessBoard} 
              alt="Chess Board" 
              width={300} 
              height={300} 
            />
          </div>
        </div>
        <div className="text-center leading-[1.8] font-light">
          <TextGenerateEffect
            words="The UCCC is geared towards promoting the sport of chess among all demographics, from beginner to master. Our objective is to assist fellow enthusiasts and players to hone their chess skills and continue to reach new peaks of excellence."
            className="text-lg text-black"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutUs