import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Ads = () => {
  const images = [
    "https://via.placeholder.com/600x200?text=Imagem+1",
    "https://via.placeholder.com/600x200?text=Imagem+2",
    "https://via.placeholder.com/600x200?text=Imagem+3",
    "https://via.placeholder.com/600x200?text=Imagem+4",
    "https://via.placeholder.com/600x200?text=Imagem+5",
    "https://via.placeholder.com/600x200?text=Imagem+6",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="p-4">
      <h2 className="text-lg font-bold mb-4">Lava Rápidos em Destaque</h2>

      <div className="relative">

        <img
          src={images[currentIndex]}
          alt={`Imagem ${currentIndex + 1}`}
          className="rounded-lg w-full h-52 mb-1"
        />


        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#ffffff8a] p-2 rounded-full shadow-md hover:bg-gray-300"
          onClick={handlePrevious}
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
        </button>


        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#ffffff8a] p-2 rounded-full shadow-md hover:bg-gray-300"
          onClick={handleNext}
        >
          <ChevronRightIcon className="w-6 h-6 text-gray-800" />
        </button>


        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className="h-[3px] w-14 bg-gray-400 rounded-full overflow-hidden relative"
            >
              <div
                className={`absolute top-0 left-0 h-full ${
                  currentIndex >= index ? "bg-blue-500" : "bg-gray-300"
                } transition-all`}
                style={{
                  width:
                    index === currentIndex
                      ? "100%"
                      : currentIndex > index
                      ? "100%"
                      : "0%",
                  animation:
                    index === currentIndex
                      ? "progress 4s linear infinite"
                      : "none",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes progress {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Ads;
