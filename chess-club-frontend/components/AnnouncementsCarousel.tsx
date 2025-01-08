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
  const [error, setError] = useState<string | null>(null); // ✅ Moved inside component

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(
          "https://chess-club-backend-bd6f865484d6.herokuapp.com/api/v1/announcements" 
        );
        setCarouselData(response.data as Announcement[]);
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
            {error ? ( // ✅ Display error if fetch fails
              <p className="text-red-500 text-center">{error}</p>
            ) : (
              <Swiper
                modules={[Navigation]}
                navigation={true} // ✅ Simplified navigation setup
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
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsCarousel;
