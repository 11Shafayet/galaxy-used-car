'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import car1 from '/public/assets/car1.png';
import car2 from '/public/assets/car2.png';
import car3 from '/public/assets/car3.png';
import dummyCar from '/public/assets/dummy-car.png';
import CarCardSkeleton from '../skeletons/CarCardSkeletor';

import { IoMdSpeedometer } from 'react-icons/io';
import { PiEngineBold } from 'react-icons/pi';
import { BsFuelPump } from 'react-icons/bs';
import { FaLongArrowAltRight } from 'react-icons/fa';

const carList = [
  {
    image: car1,
    price: '54465',
    title: '2024 Toyota R',
    mileage: '3464454',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    image: car2,
    title: '2022 Nissan ALTIMA',
    mileage: '3464454',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    image: car3,
    title: 'Vans',
    mileage: '3464454',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    image: car2,
    title: 'Electric Vehicles',
    mileage: '3464454',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    image: car3,
    title: '2024 Toyota R',
    mileage: '3464454',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    title: '2024 Toyota R',
    mileage: '3464454',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    title: '2024 Toyota R',
    mileage: '3464454',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    image: car2,
    title: 'Electric Vehicles',
    mileage: '3464454',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    image: car3,
    title: '2024 Toyota R',
    mileage: '3464454',
    type: 'Electric',
    engine: 'Engine',
  },
];

const FeaturedCar = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section className="py-16 md:py-28 relative bg-[#f6f6f6]">
      <div className="container px-4 mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Featured Car
        </h1>

        {loading ? (
          <CarCardSkeleton />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16">
              {carList.map((car, i) => {
                const { image, title, mileage, type, engine, price } = car;
                return (
                  <div
                    className="relative pt-4 pb-8 px-8 rounded-md border border-gray-300 bg-white shadow flex flex-col justify-center items-center"
                    key={i}
                  >
                    {price && (
                      <h4 className="absolute top-0 right-0 rounded-md bg-primary bg-opacity-15 text-primary font-bold text-lg py-2 px-5">
                        ${price}
                      </h4>
                    )}

                    <Image
                      src={image ? image : dummyCar}
                      alt="car image"
                      className="h-auto max-w-[180px] object-cover"
                    />
                    <h5 className="font-bold text-2xl overflow-x-hidden line-clamp-2 text-ellipsis text-[#127F4A] text-center">
                      {title}
                    </h5>

                    <div className="flex flex-nowrap gap-4 justify-between mt-4">
                      {/* mileage */}
                      <div className="flex items-center gap-3 text-gray-600">
                        <IoMdSpeedometer className="text-xl" />
                        <p className="text-sm opacity-75">{mileage} mi</p>
                      </div>

                      {/* type */}
                      <div className="flex items-center gap-3 text-gray-600">
                        <PiEngineBold className="text-xl" />
                        <p className="text-sm opacity-75">{type}</p>
                      </div>

                      {/* engine */}
                      <div className="flex items-center gap-3 text-gray-600">
                        <BsFuelPump className="text-xl" />
                        <p className="text-sm opacity-75">{engine}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center mt-12">
              <Link
                href=""
                className="flex justify-center items-center gap-x-2 py-3 px-8 border border-gray-300 rounded-md hover:bg-primary hover:text-white duration-500"
              >
                Show All Vehicles <FaLongArrowAltRight />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedCar;
