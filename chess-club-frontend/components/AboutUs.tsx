import React from 'react'
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from 'next/image';
import ChessBoard from "@/public/ChessBoard.png"

const AboutUs = () => {
  return (
    <div className='section mt-6'>
        <div className='banner bg-grey text-green font-bold m-10'>
            About Us
        </div>
        <div className='about-us m-5 p-3 bg-grey'>
            <Image 
            className="m-4" 
            src={ChessBoard} 
            alt="Chess Board" 
            width={300}  
            height={300} 
            />
            <div>
                <TextGenerateEffect 
                        words='The UCCC is geared towards promoting the sport of chess among all demographics, from beginner to master. Our objective is to assist fellow enthusiasts and players to hone their chess skills and continue to reach new peaks of excellence.'
                        className="text-lg text-black"/>
            </div>
        </div>
    </div>
  )
}

export default AboutUs