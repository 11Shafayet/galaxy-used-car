'use client';

import Image from 'next/image';
import banner1 from '/public/assets/banner1.png';
import { FaPlay, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const VideoDetails = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <section className="relative py-16 md:py-28 z-10 text-white text-center">
        <Image
          src={banner1}
          alt="banner"
          className="w-full h-full object-cover absolute inset-0 -z-10"
        />

        <div className="container px-4 mx-auto !max-w-[900px]">
          <h1 className="text-4xl md:text-6xl font-medium !leading-tight max-w-[750px] mx-auto">
            We Make Finding The Right Car Simple
          </h1>
          <p className="text-lg !leading-normal max-w-[688px] mx-auto mt-6 mb-12">
            At Galaxy Used Car what matters to us is making your car search and
            buying experience as simple as possible, so you can find the right
            car quickly and get on with making it yours.
          </p>

          <div className="flex justify-center items-center">
            <div
              className="bg-primary flex justify-center items-center p-8 pl-[34px] rounded-full border-[3px] border-white text-[33px] cursor-pointer"
              onClick={() => setPlaying(true)}
            >
              <FaPlay />
            </div>
          </div>
        </div>
      </section>

      {playing && (
        <div className="fixed w-full h-full inset-0 z-[1000]">
          <div
            className="bg-black w-full h-full opacity-30 absolute inset-0 z-[1000]"
            onClick={() => setPlaying(false)}
          />
          {/* close button */}
          <div
            className="absolute top-6 right-6 text-3xl md:text-4xl lg:text-5xl z-[1111] cursor-pointer hover:rotate-90 duration-500"
            onClick={() => setPlaying(false)}
          >
            <FaTimes />
          </div>

          {/* video */}
          <iframe
            width="60%"
            height="70%"
            src="https://www.youtube.com/embed/DxxT7kKyBpY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[11111]"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default VideoDetails;
