"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import AnnouncementTile from "./AnnouncementTile";
import axios from "axios";

interface Announcement {
  title: string;
  description: string;
  date: string;
  link: string;
}

const AnnouncementsCarousel = () => {
  const [carouselData, setCarouselData] = useState<Announcement[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/announcements"
        );
        setCarouselData(response.data);
      } catch (err) {
        console.error("Error fetching announcements:", err);
        setError("Error fetching announcements");
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="section mt-6 mb-14">
      <div
        id="announcements"
        className="banner bg-dark-bg text-green tracking-widest font-bold text-center py-4 mb-8"
      >
        ANNOUNCEMENTS
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-deep-blue p-6 md:p-8 rounded-2xl shadow-lg">
          <div className="max-w-[1200px] w-full mx-auto">
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
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center"
                >
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
  );
};

export default AnnouncementsCarousel;