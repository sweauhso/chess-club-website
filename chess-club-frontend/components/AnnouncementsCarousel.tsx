'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import AnnouncementTile from './AnnouncementTile';


const AnnouncementsCarousel = () => {
    const carouselData = [
        {
          title: 'Chess Tournament',
          description: 'Join the chess tournament this summer. A challenge for all levels! Join the chess tournament this summer. A challenge for all levels! Join the chess tournament this summer. A challenge for all levels! Join the chess tournament this summer. A challenge for all levels!',
          date: 'July 1, 2024',
          link: 'https://example.com',
        },
        {
          title: 'Chess Workshop',
          description: 'Attend our chess workshop for beginners and experts alike!',
          date: 'August 15, 2024',
          link: 'https://example.com',
        },
        {
          title: 'Chess Club Meetup',
          description: 'Meet with fellow chess enthusiasts for casual games and learning.',
          date: 'September 10, 2024',
          link: 'https://example.com',
        },
      ];
  return (
    <div className='section mt-6 mb-14'>
        <div id="announcements" className='banner bg-grey text-green font-bold m-10 mb-16'>
            Announcements
        </div>
        <div>
            <div className="px-10 bg-deep-blue md:px-28  mb-10 flex flex-col items-center">
        <div className="max-w-[1200px] w-full">
            <Swiper
            modules={[Navigation]}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }}
            spaceBetween={30}
            slidesPerView={1}
            className="swiper-container"
            >
            {carouselData.map((announcement, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center">
                <AnnouncementTile
                    title={announcement.title}
                    description={announcement.description}
                    date={announcement.date}
                    link={announcement.link}
                />
                </SwiperSlide>
            ))}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            </Swiper>
        </div>
        </div>
            </div>
        
    </div>
  )
}

export default AnnouncementsCarousel