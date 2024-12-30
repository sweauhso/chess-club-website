"use client";
import React, { useEffect, useState, useMemo, useRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Carousel = ({ data = [], duration = 4900 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);
  const hasData = useMemo(() => Boolean(data.length), [data]);

  useEffect(() => {
    if (!data.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      setProgress(10);
    }, duration);

    return () => clearInterval(interval);
  }, [data, duration]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 100 / (duration / 100);
        if (nextProgress >= 100) clearInterval(progressInterval);

        return nextProgress;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [currentIndex, duration]);

  useEffect(() => {
    if (progressRef.current) progressRef.current.style.width = `${progress}%`;
  }, [progress, duration]);

  return (
    <div className="bg-grey duration-300 ease-in-out group overflow-hidden pt-3 pb-4" style={{ height: "50vh", width: "50vw", borderRadius: "25px" }}>
      <div className="flex flex-col justify-center items-center w-full h-full">
        {!hasData && <>No Data Available</>}
        {hasData &&
          data.map((item, index) => (
            <div
              key={item?.id}
              className={cn(
                `flex flex-col absolute transition-opacity duration-1000`,
                index === currentIndex ? "opacity-100" : "opacity-0"
              )}
              style={{ height: "45vh", width: "50vw", borderRadius: "25px"}}              
            >
              {/* Carousel Item Layout: Flex Column for Title, Date, Link */}
              <div className="flex flex-col items-start w-full">
                {/* Title */}
                <div className="ml-3 text-xl font-bold text-green">{item?.title}</div>
                {/* Date */}
                <div className="ml-3 text-sm text-gray-500">{item?.date}</div>
                {/* Link */}
                {item?.link && (
                  <a href={item?.link} target="_blank" rel="noopener noreferrer" className="ml-3 text-blue-500">
                    Visit here
                  </a>
                )}
              </div>

              {/* Image and Description in Flex Row */}
              <div className="flex flex-row w-full p-4 space-x-4">
                {/* Image */}
                <div
                  className="w-[275px] h-[275px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${item?.imageUrl || "/ChessSet-2.jpg"}')`,
                  }}
                />
                {/* Description */}
                <div className="w-[30vw] p-4 text-l text-gray-700 items-center m-auto">
                  <p>{item?.description}</p>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Progress Indicator */}
      {hasData && (
        <div className="gap-1.5 w-full p-0 px-4 pb-4 flex justify-center">
          {data.map((item, index) => {
            const isActive = currentIndex === index;
            return (
              <div
                key={`${item?.id}-${index}`}
                className={cn(
                  "overflow-hidden relative shrink-0 h-2 bg-white bg-opacity-30 rounded-full",
                  isActive ? "w-[30px]" : "w-2"
                )}
              >
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-transparent rounded-full">
                    <div
                      ref={progressRef}
                      className="h-full bg-amber-300 rounded-full"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Carousel;
