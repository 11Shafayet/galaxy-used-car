'use client';

import { useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { IoSpeedometerOutline } from 'react-icons/io5';
import { PiGlobeHemisphereWest } from 'react-icons/pi';
import { GiCarDoor } from 'react-icons/gi';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// images
import banner1 from '/public/assets/car-details-banner.png';
import thumb1 from '/public/assets/thumb1.png';
import dummycar from '/public/assets/dummy-car.png';
import Image from 'next/image';

const carImageList = [
  banner1,
  dummycar,
  banner1,
  dummycar,
  banner1,
  dummycar,
  banner1,
  dummycar,
  banner1,
  thumb1,
  banner1,
  thumb1,
];

const additionalDetails = [
  {
    label: 'Body Type',
    value: 'SUV',
  },
  {
    label: 'Fuel Type',
    value: 'Petrol',
  },
  {
    label: 'Year',
    value: '2024',
  },
  {
    label: 'Millage',
    value: '4324534',
  },
  {
    label: 'Transmission Type',
    value: 'Manual Transmission',
  },
  {
    label: 'Engine',
    value: 'Engine',
  },
  {
    label: 'Drive',
    value: '4WD',
  },
  {
    label: 'Exterior Color',
    value: 'Blue',
  },
  {
    label: 'Interior Color',
    value: 'Blue',
  },
];

const features = [
  {
    icon: <FaRegStar />,
    title: 'Trim',
    value: 'High Line',
  },
  {
    icon: <SlCalender />,
    title: 'Year',
    value: '2023',
  },
  {
    icon: <IoSpeedometerOutline />,
    title: 'Kilometers',
    value: '0',
  },
  {
    icon: <PiGlobeHemisphereWest />,
    title: 'Regional Specs',
    value: 'Others',
  },
  {
    icon: <GiCarDoor />,
    title: 'Doors',
    value: '5',
  },
];

const DetailsContainer = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <h4 className="text-3xl font-medium leading-snug">
        MITSUBISHI XPANDER HI-LINE 1.5L HI A/T PTR [EXPORT ONLY] [DA] 1.5L HI
        A/T PTR
      </h4>
      {/* images */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-[330px] md:h-[500px] xl:h-[600px] mb-4 rounded-xl overflow-hidden"
      >
        {carImageList.map((item, i) => (
          <SwiperSlide className="overflow-hidden rounded-xl" key={i}>
            <Image
              src={item}
              alt="car"
              width={400}
              height={400}
              className="min-w-full rounded-xl h-full max-h-[330px] md:max-h-[500px] xl:max-h-[600px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        breakpoints={{
          200: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
          1200: {
            slidesPerView: 7,
          },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {carImageList.map((item, i) => (
          <SwiperSlide
            className="rounded-xl overflow-hidden cursor-pointer"
            key={i}
          >
            <Image
              src={item}
              alt="car"
              width={400}
              height={400}
              className="min-w-full min-h-[100px] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* features */}
      <div className="mt-12">
        <h5 className="text-2xl font-semibold">Features</h5>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 text-center gap-4 mt-3">
          {features.map((item, i) => (
            <div className="flex flex-col gap-y-2 shadow-black rounded-md bg-white p-4 text-tertiary">
              <h6 className="font-medium text-[19px]">{item.title}</h6>
              <p className="flex justify-center items-center text-xl opacity-75">
                {item.icon}
              </p>
              <p className="text-sm font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      {/* additional details */}
      <div className="mt-12">
        <h5 className="text-2xl font-semibold">Additional Details</h5>
        <div className="flex flex-col mt-3">
          {additionalDetails.map((item, i) => (
            <>
              <div
                className="flex justify-between items-center gap-x-3 py-4"
                key={i}
              >
                <p className="text-tertiary">{item.label}</p>
                <p>{item.value}</p>
              </div>
              <hr />
            </>
          ))}
        </div>
      </div>
      {/* descriptions */}
      <div className="mt-12">
        <h5 className="text-2xl font-semibold">Description</h5>
        <p className="opacity-75 mt-3 leading-loose text-sm">
          The 2024 Horizon GT is the epitome of sophistication, blending
          cutting-edge technology with unparalleled performance. Designed to
          captivate the senses and elevate the driving experience, this luxury
          sedan offers a harmonious fusion of style, comfort, and power. Whether
          navigating city streets or embarking on long journeys, the Horizon GT
          promises an exhilarating ride that exceeds expectations. Equipped with
          the latest automotive innovations, the Horizon GT sets the standard
          for technological excellence. An intuitive touchscreen infotainment
          system serves as the command center for navigation, entertainment, and
          vehicle settings, while voice recognition technology allows for
          hands-free operation. Cutting-edge driver assistance features, such as
          adaptive cruise control and lane-keeping assist, provide an extra
          layer of safety and convenience, ensuring a confident and stress-free
          driving experience.
        </p>
      </div>
    </div>
  );
};

export default DetailsContainer;
