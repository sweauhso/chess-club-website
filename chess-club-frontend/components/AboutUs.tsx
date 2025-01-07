import React from 'react';
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from 'next/image';
import ChessBoard from "@/public/ChessBoard.png";

const AboutUs = () => {
  return (
    <div className="section mt-6 mb-14">
      <div id="about-us" className="banner bg-dark-bg text-green font-bold tracking-widest text-center py-4 mb-8">
        ABOUT US
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center shadow-lg bg-medium-bg rounded-2xl p-6 md:p-8 text-black">
          <div className="flex justify-center mb-6 md:mb-0 md:mr-6 w-full md:w-1/2 lg:w-1/3">
            <Image 
              src={ChessBoard} 
              alt="Chess Board" 
              width={600} 
              height={600} 
              className="rounded-lg w-full"
            />
          </div>
          <div className="text-center md:text-left leading-relaxed font-light w-full md:w-1/2 lg:w-2/3">
            <TextGenerateEffect
              words="The UCCC is geared towards promoting the sport of chess among all demographics, from beginner to master. Our objective is to assist fellow enthusiasts and players to hone their chess skills and continue to reach new peaks of excellence."
              className="text-lg text-dark-text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;